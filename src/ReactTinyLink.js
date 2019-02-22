import React, { Fragment, useEffect, useState } from 'react';
import Axios from 'axios';
import cheerio from 'cheerio';
import { setupCache } from 'axios-cache-adapter';
import {
  Card,
  Media,
  ContentWrapper,
  Header,
  Content,
  Footer,
  Description,
} from './components/Card';
import { getHostname } from './utils';
import { ScrapAmazon } from './rules/Amazon/ScrapAmazon';
import { ScrapYoutube } from './rules/Youtube/ScrapYoutube';
import { ScrapVideo } from './rules/Video/ScrapVideo';
import { ScrapImage } from './rules/Image/ScrapImage';
import { ScrapAudio } from './rules/Audio/ScrapAudio';
import { isVideo } from './rules/utils';
import { ScraperWraper , TYPE_DEFAULT} from './rules/index';
import CardMedia from './components/CardMedia';

const initialState = {
  data: {
    title: null,
    url: null,
    description: null,
    image: null,
    video: [],
  },
  loading: true,
};
function useEffectAsync(effect, inputs) {
  useEffect(() => {
    effect();
  }, inputs);
}

async function fetch(url, setState) {
  const proxiedUrl = `https://cors-anywhere.herokuapp.com/${url}`;
  const client = Axios.create({
    url: proxiedUrl,
    headers: {
      'x-requested-with': '',
    },
    adapter: setupCache({
      maxAge: 15 * 60 * 1000,
    }).adapter,
  });
  let temp = Object.assign({}, initialState);

  try {
    temp = {
      data: await ScraperWraper({ proxiedUrl: proxiedUrl, url: url }, client),
      loading: false,
    };

    setState(temp);
  } catch (error) {
    temp = {
      data: {
        title: url.substring(url.lastIndexOf('/') + 1),
        description: url.substring(url.lastIndexOf('/') + 1),
        url:url,
        image:[],
        video: [],
        type:TYPE_DEFAULT
      },
    };

    temp.loading = false;
    setState(temp);
    console.error(error);
  } finally {
    temp.loading = false;
    setState(temp);
  }
}

const ReactTinyLink = props => {
  const [linkMeta, setlinkMeta] = useState(initialState);
  useEffectAsync(() => {
    fetch(props.url, setlinkMeta);
  }, []);
  return (
    <Fragment>
      <Card
        className="react_tinylink_card"
        cardSize={props.cardSize}
        href={props.url}
      >
        {props.showGraphic && (
          <CardMedia
            autoPlay={props.autoPlay}
            cardSize={props.cardSize}
            linkMeta={linkMeta}
            
          />
        )}
        <ContentWrapper
          className="react_tinylink_card_content_wrapper"
          cardSize={props.cardSize}
        >
          <Header
            maxLine={props.maxLine}
            minLine={props.minLine}
            className="react_tinylink_card_content_header"
          >
            <Description
              loading={linkMeta.loading}
              loadingWidth={2}
              maxLine={props.maxLine}
              minLine={props.minLine}
              className="react_tinylink_card_content_header_description"
            >
              {linkMeta.data.title ? linkMeta.data.title : props.url}
            </Description>
          </Header>
          <Content
            maxLine={props.maxLine}
            minLine={props.minLine}
            className="react_tinylink_card_content"
            cardSize={props.cardSize}
          >
            <Description
              loading={linkMeta.loading}
              loadingWidth={1}
              className="react_tinylink_card_content_description"
            >
              {linkMeta.data.description
                ? linkMeta.data.description
                : props.url}
            </Description>
          </Content>
          <Footer className="react_tinylink_footer">
            <Description
              loading={linkMeta.loading}
              loadingWidth={1}
              className="react_tinylink_card_footer_description"
            >
              {getHostname(props.url)}
            </Description>
          </Footer>
        </ContentWrapper>
      </Card>
    </Fragment>
  );
};

export default ReactTinyLink;

ReactTinyLink.defaultProps = {
  maxLine: 2,
  minLine: 1,
  proxyURL: 'https://cors-anywhere.herokuapp.com',
  showGraphic: true,
  autoPlay:true
};

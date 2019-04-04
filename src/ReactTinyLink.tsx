import * as React from 'react';
// import React, { Fragment, useEffect, useState } from "react";

import {
  Card,
  ContentWrapper,
  Header,
  Content,
  Footer,
  Description,
} from './components/Card';
import { getHostname } from './utils';

import { ScraperWraper, TYPE_DEFAULT } from './rules/index';
import CardMedia from './components/CardMedia';

const initialState = {
  data: {
    title: null,
    description: null,
    image: null,
    type: null,
    video: [],
    url: null,
  },
  loading: true,
};
function useEffectAsync(effect, inputs) {
  React.useEffect(() => {
    effect();
  }, inputs);
}

async function get(url, proxyUrl, setState) {
  const client = fetch(proxyUrl ? `${proxyUrl}/${url}` : url, {
    headers: {
      'x-requested-with': '',
    },
  });
  let temp = Object.assign({}, initialState);

  try {
    temp = {
      data: await ScraperWraper(url, client),
      loading: false,
    };
    setState(temp);
  } catch (error) {
    temp = {
      data: {
        title: url.substring(url.lastIndexOf('/') + 1),
        description: url.substring(url.lastIndexOf('/') + 1),
        image: [],
        url: url,
        video: [],
        type: TYPE_DEFAULT,
      },
      loading: false,
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
  const [linkMeta, setlinkMeta] = React.useState(initialState);
  useEffectAsync(() => {
    get(props.url, props.proxyUrl, setlinkMeta);
  }, []);
  return (
    <React.Fragment>
      <Card
        className="react_tinylink_card"
        cardSize={props.cardSize}
        href={props.url}
        width={props.width}
        isShownGraphic={props.showGraphic}
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
              {props.header ? props.header :
                  linkMeta.data.title ? linkMeta.data.title : props.url}
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
              {props.description ? props.description :
                linkMeta.data.description ? linkMeta.data.description : props.url }
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
    </React.Fragment>
  );
};

export default ReactTinyLink;

ReactTinyLink.defaultProps = {
  cardSize: 'small',
  maxLine: 2,
  minLine: 1,
  header: null,
  descript: null,
  url: 'http://google.com',
  width: '640px',
  proxyUrl: 'https://cors-anywhere.herokuapp.com',
  showGraphic: true,
  autoPlay: false,
};

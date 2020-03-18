import * as React from 'react'
import { Card, ContentWrapper, Header, Content, Footer, Description } from './components/Card'
import { getHostname } from './utils'
import ScraperWraper from './rules'
import { ReactTinyLinkType, IReactTinyLinkProps, IReactTinyLinkData } from './ReactTinyLinkTypes'
import CardMedia from './components/CardMedia'

const useEffectAsync = (effect: () => void, input) => {
  React.useEffect(() => {
    effect()
  }, input)
}

const fetchUrl = (
  url: string,
  proxyUrl: string,
  defaultMedia: string,
  setData: (data: IReactTinyLinkData) => void,
  setLoading: (loading: boolean) => void,
  onError: (error: Error) => void,
  onSuccess: (response: IReactTinyLinkData) => void,
) => {
  setLoading(true)

  const client = fetch(proxyUrl ? `${proxyUrl}/${url}` : url, {
    headers: {
      'x-requested-with': '',
    },
  })

  ScraperWraper(url, client, defaultMedia ? [defaultMedia] : [])
    .then((data: IReactTinyLinkData) => {
      setData(data)
      onSuccess(data)
      setLoading(false)
    })
    .catch((err: any) => {
      onError(err)
      setData({
        title: url.substring(url.lastIndexOf('/') + 1),
        description: url.substring(url.lastIndexOf('/') + 1),
        image: defaultMedia ? [defaultMedia] : [],
        url: url,
        video: defaultMedia ? [defaultMedia] : [],
        type: ReactTinyLinkType.TYPE_DEFAULT,
      })
      setLoading(false)
    })
}
export const ScrapperWraper = ScraperWraper
export const ReactTinyLink: React.FC<IReactTinyLinkProps> = ({
  cardSize = 'small',
  maxLine = 2,
  minLine = 1,
  header = null,
  description = null,
  url = '',
  width = '640px',
  proxyUrl = 'https://cors-anywhere.herokuapp.com',
  showGraphic = true,
  showDescription = true,
  autoPlay = false,
  defaultMedia = '',
  onError = () => { },
  onSuccess = () => { },
}: IReactTinyLinkProps) => {
  const [data, setData] = React.useState({
    title: null,
    description: null,
    image: null,
    type: null,
    video: [],
    url: null,
  })
  const [loading, setLoading] = React.useState(false)
  useEffectAsync(() => {
    fetchUrl(url, proxyUrl, defaultMedia, setData, setLoading, onError, onSuccess)
  }, [url, proxyUrl, defaultMedia])

  return (
    <>
      <Card className="react_tinylink_card" cardSize={cardSize} href={url} width={width} isShownGraphic={showGraphic} isShowDescription={showDescription} >
        {showGraphic && <CardMedia autoPlay={autoPlay} cardSize={cardSize} data={data} isShowDescription={showDescription} />}
        
          { showDescription && <ContentWrapper className="react_tinylink_card_content_wrapper" cardSize={cardSize}>
            <Header maxLine={maxLine} minLine={minLine} className="react_tinylink_card_content_header">
              <Description
                loading={loading}
                loadingWidth={2}
                maxLine={maxLine}
                minLine={minLine}
                className="react_tinylink_card_content_header_description"
              >
                {header ? header : data.title ? data.title : url}
              </Description>
            </Header>
            <Content maxLine={maxLine} minLine={minLine} className="react_tinylink_card_content" cardSize={cardSize}>
              <Description loading={loading} loadingWidth={1} className="react_tinylink_card_content_description">
                {description ? description : data.description ? data.description : url}
              </Description>
            </Content>
            <Footer className="react_tinylink_footer">
              <Description loading={loading} loadingWidth={1} className="react_tinylink_card_footer_description">
                {getHostname(url)}
              </Description>
            </Footer>
          </ContentWrapper>
        }
      </Card>
    </>
  )
}

import * as React from 'react'
import { Card, ContentWrapper, Header, Content, Footer, Description } from './components/Card'
import { getHostname } from './utils'
import { ScraperWraper } from './rules'
import { ReactTinyLinkType, IReactTinyLinkProps, IReactTinyLinkState } from './ReactTinyLinkTypes'
import CardMedia from './components/CardMedia'

export class ReactTinyLink extends React.Component<IReactTinyLinkProps, IReactTinyLinkState> {
  public static defaultProps: IReactTinyLinkProps = {
    cardSize: 'small',
    maxLine: 2,
    minLine: 1,
    header: null,
    description: null,
    url: 'http://google.com',
    width: '640px',
    proxyUrl: 'https://cors-anywhere.herokuapp.com',
    showGraphic: true,
    autoPlay: false,
  }

  constructor(props: any) {
    super(props)

    this.state = {
      data: {
        title: null,
        description: null,
        image: null,
        type: null,
        video: [],
        url: null,
      },
      loading: true,
    }
  }

  public componentDidMount() {
    const url = this.props.url
    const client = fetch(this.props.proxyUrl ? `${this.props.proxyUrl}/${this.props.url}` : url, {
      headers: {
        'x-requested-with': '',
      },
    })

    ScraperWraper(url, client)
      .then((data: any) => {
        this.setState({ data, loading: false })
      })
      .catch((err: any) => {
        console.error(err)
        this.setState({
          data: {
            title: url.substring(url.lastIndexOf('/') + 1),
            description: url.substring(url.lastIndexOf('/') + 1),
            image: this.props.defaultMedia ? [this.props.defaultMedia] : [],
            url: url,
            video: this.props.defaultMedia ? [this.props.defaultMedia] : [],
            type: ReactTinyLinkType.TYPE_DEFAULT,
          },
          loading: false,
        })
      })
  }

  public render() {
    return (
      <>
        <Card
          className="react_tinylink_card"
          cardSize={this.props.cardSize}
          href={this.props.url}
          width={this.props.width}
          isShownGraphic={this.props.showGraphic}
        >
          {this.props.showGraphic && (
            <CardMedia autoPlay={this.props.autoPlay} cardSize={this.props.cardSize} data={this.state.data} />
          )}
          <ContentWrapper className="react_tinylink_card_content_wrapper" cardSize={this.props.cardSize}>
            <Header
              maxLine={this.props.maxLine}
              minLine={this.props.minLine}
              className="react_tinylink_card_content_header"
            >
              <Description
                loading={this.state.loading}
                loadingWidth={2}
                maxLine={this.props.maxLine}
                minLine={this.props.minLine}
                className="react_tinylink_card_content_header_description"
              >
                {this.props.header ? this.props.header : this.state.data.title ? this.state.data.title : this.props.url}
              </Description>
            </Header>
            <Content
              maxLine={this.props.maxLine}
              minLine={this.props.minLine}
              className="react_tinylink_card_content"
              cardSize={this.props.cardSize}
            >
              <Description
                loading={this.state.loading}
                loadingWidth={1}
                className="react_tinylink_card_content_description"
              >
                {this.props.description
                  ? this.props.description
                  : this.state.data.description
                  ? this.state.data.description
                  : this.props.url}
              </Description>
            </Content>
            <Footer className="react_tinylink_footer">
              <Description
                loading={this.state.loading}
                loadingWidth={1}
                className="react_tinylink_card_footer_description"
              >
                {getHostname(this.props.url)}
              </Description>
            </Footer>
          </ContentWrapper>
        </Card>
      </>
    )
  }
}
export default ReactTinyLink

import React, { Component } from 'react';

import ReactTinyLink from './ReactTinyLink';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>React-Tiny-Link</h1>
        <p>
          React link preview component with cards for web without a specific
          backend that convert your links into rich previews.
        </p>
        <p>
          It works with most of the active links as it scrapes the almost all
          possible open-graph tags from pages. Component was made to use
          customized way of scraping (inspired by{' '}
          <a
            href="https://github.com/microlinkhq/metascraper"
            rel="noopener noreferrer"
            target="_blank"
          >
            metascrapper{' '}
          </a>
          by{' '}
          <a
            href="https://github.com/microlinkhq"
            rel="noopener noreferrer"
            target="_blank"
          >
            Microlink{' '}
          </a>{' '}
          ) for some of the popular urls like Amazon and Youtube links.
        </p>
        <p>If you may want to scrape or add customize scrapping rules, please feel free to send PR. </p>
        <h3>Amazon url example</h3>
        <ReactTinyLink
          cardSize="small"
          showGraphic={true}
          maxLine={2}
          minLine={1}
          url="https://www.amazon.com/Steve-Madden-Mens-Jagwar-10-5/dp/B016X44MKA/ref=lp_18637582011_1_1?srs=18637582011&ie=UTF8&qid=1550721409&sr=8-1"
        />
        <h4>Code</h4>
        <pre className="language-markup">
          <code>
            {`<ReactTinyLink
  cardSize="small"
  showGraphic={true}
  maxLine={2}
  minLine={1}
  url="https://www.amazon.com/Steve-Madden-Mens-Jagwar-10-5/dp/B016X44MKA/ref=lp_18637582011_1_1?srs=18637582011&ie=UTF8&qid=1550721409&sr=8-1"
/>`}
          </code>
        </pre>

        <h3>Audio url example</h3>
        <ReactTinyLink
          cardSize="small"
          showGraphic={true}
          maxLine={2}
          minLine={1}
          url="http://www.hochmuth.com/mp3/Haydn_Cello_Concerto_D-1.mp3"
        />
        <h4>Audio example Code</h4>
        <pre className="language-markup">
          <code>
            {` <ReactTinyLink
  cardSize="small"
  showGraphic={true}
  maxLine={2}
  minLine={1}
  url="https://www.youtube.com/watch?v=plEcjL3XZz8"
        />`}
          </code>
        </pre>
        <h3>Youtube url example</h3>
        <ReactTinyLink
          cardSize="small"
          showGraphic={true}
          maxLine={2}
          minLine={1}
          url="https://www.youtube.com/watch?v=plEcjL3XZz8"
        />
        <h4>Youtube example Code</h4>
        <pre className="language-markup">
          <code>
            {` <ReactTinyLink
  cardSize="small"
  showGraphic={true}
  maxLine={2}
  minLine={1}
  url="https://www.youtube.com/watch?v=plEcjL3XZz8"
        />`}
          </code>
        </pre>
        <h3>Video url example</h3>
        <ReactTinyLink
          cardSize="small"
          showGraphic={true}
          maxLine={2}
          minLine={1}
          url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
        />
        <h4>Video url example Code</h4>
        <pre className="language-markup">
          <code>
            {` <ReactTinyLink
    cardSize="small"
    showGraphic={true}
    maxLine={2}
    minLine={1}
    url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
        />`}
          </code>
        </pre>
        <h3>Default url example</h3>
        <ReactTinyLink
          cardSize="small"
          showGraphic={true}
          maxLine={2}
          minLine={1}
          url="https://www.iflix.com/"
        />
        <h4>Default example Code</h4>
        <pre className="language-markup">
          <code>
            {` <ReactTinyLink
  cardSize="small"
  showGraphic={true}
  maxLine={2}
  minLine={1}
  url="https://www.iflix.com/"
        />`}
          </code>
        </pre>
        <h1>Large Card examples</h1>
        <h3>Amazon url example</h3>
        <ReactTinyLink
          cardSize="large"
          showGraphic={true}
          maxLine={2}
          minLine={1}
          url="https://www.amazon.com/Steve-Madden-Mens-Jagwar-10-5/dp/B016X44MKA/ref=lp_18637582011_1_1?srs=18637582011&ie=UTF8&qid=1550721409&sr=8-1"
        />
        <h4>Code</h4>
        <pre className="language-markup">
          <code>
            {`<ReactTinyLink
  cardSize="large"
  showGraphic={true}
  maxLine={2}
  minLine={1}
  url="https://www.amazon.com/Steve-Madden-Mens-Jagwar-10-5/dp/B016X44MKA/ref=lp_18637582011_1_1?srs=18637582011&ie=UTF8&qid=1550721409&sr=8-1"
/>`}
          </code>
        </pre>

        <h3>Audio url example</h3>
        <ReactTinyLink
          cardSize="large"
          showGraphic={true}
          maxLine={2}
          minLine={1}
          url="http://www.hochmuth.com/mp3/Haydn_Cello_Concerto_D-1.mp3"
        />
        <h4>Audio example Code</h4>
        <pre className="language-markup">
          <code>
            {` <ReactTinyLink
  cardSize="large"
  showGraphic={true}
  maxLine={2}
  minLine={1}
  url="http://www.hochmuth.com/mp3/Haydn_Cello_Concerto_D-1.mp3"
        />`}
          </code>
        </pre>
        <h3>Youtube url example</h3>
        <ReactTinyLink
          cardSize="large"
          showGraphic={true}
          maxLine={2}
          minLine={1}
          url="https://www.youtube.com/watch?v=plEcjL3XZz8"
        />
        <h4>Youtube example Code</h4>
        <pre className="language-markup">
          <code>
            {` <ReactTinyLink
  cardSize="large"
  showGraphic={true}
  maxLine={2}
  minLine={1}
  url="https://www.youtube.com/watch?v=plEcjL3XZz8"
        />`}
          </code>
        </pre>
        <h3>Video url example</h3>
        <ReactTinyLink
          cardSize="large"
          showGraphic={true}
          maxLine={2}
          minLine={1}
          url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
        />
        <h4>Video url example Code</h4>
        <pre className="language-markup">
          <code>
            {` <ReactTinyLink
  cardSize="large"
  showGraphic={true}
  maxLine={2}
  minLine={1}
  url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
        />`}
          </code>
        </pre>
        <h3>Default url example</h3>
        <ReactTinyLink
          cardSize="large"
          showGraphic={true}
          maxLine={2}
          minLine={1}
          url="https://www.iflix.com/"
        />
        <h4>Default example Code</h4>
        <pre className="language-markup">
          <code>
            {` <ReactTinyLink
  cardSize="large"
  showGraphic={true}
  maxLine={2}
  minLine={1}
  url="https://www.iflix.com/" />`
      }
          </code>
        </pre>
        <footer>
          Made with <i className="fa fa-heart" style={{ color: `red` }} /> in
          Singapore
          
          <p> <a href="http://twitter.com/winhtaikaung">Twitter<i className="fab fa-twitter" style={{ color: `#00b4ff` }}></i> </a></p>
          <p> <a href="http://github.com/winhtaikaung">Github<i className="fab fa-github" ></i> </a></p>
        </footer>
      </React.Fragment>
    );
  }
}

export default App;

import * as React from 'react'
import { render } from 'react-dom'
import { ReactTinyLink } from '../../lib/index'

const Demo: React.FC = () => (
  <>
    <h1>React-Tiny-Link</h1>
    
    <p>
      React link preview component with cards for web without a specific backend that provide meta information of your
      links to render rich previews. But it uses proxy to avoid browser CORS issue.
    </p>
    <p>
      It works with most of the active links as it scrapes the almost all possible open-graph tags from pages. Component
      was made to use customized way of scraping (inspired by{' '}
      <a href="https://github.com/microlinkhq/metascraper" rel="noopener noreferrer" target="_blank">
        metascrapper{' '}
      </a>
      by{' '}
      <a href="https://github.com/microlinkhq" rel="noopener noreferrer" target="_blank">
        Microlink{' '}
      </a>{' '}
      ) for some of the popular urls like Amazon and Youtube links.
    </p>
    <p>If you may want to scrape or add customize scrapping rules, please feel free to send PR. </p>
    <h3>Docs</h3>
    <p>
      For more documentation about react-tiny-link please proceed{' '}
      <a
        href="https://github.com/winhtaikaung/react-tiny-link/blob/master/README.md"
        rel="noopener noreferrer"
        target="_blank"
      >
        here
      </a>
    </p>
    <h2>Examples</h2>
    <h3>Code Sandbox</h3>
    <p>
      <a href="https://codesandbox.io/s/monp6n08n8?fontsize=14">
        <img alt="Edit React Tiny Link" src="https://codesandbox.io/static/img/play-codesandbox.svg" />
      </a>
    </p>
    <h3>Amazon url example</h3>
    <ReactTinyLink
      cardSize="small"
      showGraphic={true}
      maxLine={2}
      minLine={1}
      autoPlay={true}
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
                url="https://www.youtube.com/watch?v=xn2A_dXoIAA"
        />`}
      </code>
    </pre>
    <h3>Youtube url example</h3>
    <ReactTinyLink
      cardSize="small"
      showGraphic={true}
      maxLine={2}
      minLine={1}
      url="https://www.youtube.com/watch?v=xn2A_dXoIAA"
    />
    <h4>Youtube example Code</h4>
    <pre className="language-markup">
      <code>
        {` <ReactTinyLink
            cardSize="small"
            showGraphic={true}
            maxLine={2}
            minLine={1}
            url="https://www.youtube.com/watch?v=xn2A_dXoIAA"
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
    <ReactTinyLink cardSize="small" showGraphic={true} maxLine={2} minLine={1} url="https://medium.com/" />
    <h4>Default example Code</h4>
    <pre className="language-markup">
      <code>
        {` <ReactTinyLink
              cardSize="small"
              showGraphic={true}
              maxLine={2}
              minLine={1}
              url="https://medium.com/"
        />`}
      </code>
    </pre>

    <h3>Preset header and description for CDN links</h3>
    <ReactTinyLink
      cardSize="small"
      showGraphic={true}
      header="Code"
      description="A sample from the code"
      maxLine={2}
      minLine={1}
      url="https://i.stack.imgur.com/eA4W3.jpg"
    />
    <h4>Default example Code</h4>
    <pre className="language-markup">
      <code>
        {`
        <ReactTinyLink
          cardSize="small"
          showGraphic={true}
          header="Code"
          description="A sample from the code"
          maxLine={2}
          minLine={1}
          url="https://i.stack.imgur.com/eA4W3.jpg"
        />`}
      </code>
    </pre>
    <h3>Instagram Link</h3>
    <ReactTinyLink
      cardSize="small"
      showGraphic={true}
      maxLine={2}
      minLine={1}
      url="https://www.instagram.com/p/B4saDr_A3yk/"
    />
    <h4>Instagram Link example</h4>
    <pre className="language-markup">
      <code>
        {`
        <ReactTinyLink
        cardSize="small"
        showGraphic={true}
        maxLine={2}
        minLine={1}
        url="https://www.instagram.com/p/B4saDr_A3yk/"
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
      url="https://www.youtube.com/watch?v=xn2A_dXoIAA"
    />
    <h4>Youtube example Code</h4>
    <pre className="language-markup">
      <code>
        {` <ReactTinyLink
              cardSize="large"
              showGraphic={true}
              maxLine={2}
              minLine={1}
              url="https://www.youtube.com/watch?v=xn2A_dXoIAA"
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
    <ReactTinyLink cardSize="large" showGraphic={true} maxLine={2} minLine={1} url="https://medium.com/" />
    <h4>Default example Code</h4>
    <pre className="language-markup">
      <code>
        {` <ReactTinyLink
  cardSize="large"
  showGraphic={true}
  maxLine={2}
  minLine={1}
  url="https://medium.com/" />`}
      </code>
    </pre>
    <h3>Preset header and description for CDN links</h3>
    <ReactTinyLink
      cardSize="large"
      showGraphic={true}
      header="Code"
      description="A sample from the code"
      maxLine={2}
      minLine={1}
      url="https://i.stack.imgur.com/eA4W3.jpg"
    />
    <h4>CDN urls example</h4>
    <pre className="language-markup">
      <code>
        {`
        <ReactTinyLink
          cardSize="large"
          showGraphic={true}
          header="Code"
          description="A sample from the code"
          maxLine={2}
          minLine={1}
          url="https://i.stack.imgur.com/eA4W3.jpg"
        />`}
      </code>
    </pre>

    <h3>Instagram Link</h3>
    <ReactTinyLink
      cardSize="large"
      showGraphic={true}
      maxLine={2}
      minLine={1}
      url="https://www.instagram.com/p/B4saDr_A3yk/"
    />
    <h4>Instagram Link example</h4>
    <pre className="language-markup">
      <code>
        {`
        <ReactTinyLink
        cardSize="large"
        showGraphic={true}
        maxLine={2}
        minLine={1}
        url="https://www.instagram.com/p/B4saDr_A3yk/"
      />`}
      </code>
    </pre>
    <h3>without description</h3>
    <ReactTinyLink
      cardSize="small"
      showGraphic={true}
      showDescription={false}
      maxLine={2}
      minLine={1}
      url="https://i.stack.imgur.com/eA4W3.jpg"
    />
    <h4>without description code</h4>
    <pre className="language-markup">
      <code>
        {`
       <ReactTinyLink
        cardSize="small"
        showGraphic={true}
        showDescription={false}
        maxLine={2}
        minLine={1}
        url="https://i.stack.imgur.com/eA4W3.jpg"
       />`}
      </code>
    </pre>
    <footer>
      Made with <i className="fa fa-heart" style={{ color: `red` }} /> in Singapore
      <p>
        {' '}
        <a href="http://twitter.com/winhtaikaung">
          Twitter
          <i className="fab fa-twitter" style={{ color: `#00b4ff` }} />{' '}
        </a>
      </p>
      <p>
        {' '}
        <a href="http://github.com/winhtaikaung">
          Github
          <i className="fab fa-github" />{' '}
        </a>
      </p>
    </footer>
  </>
)
;(window as any).env = process.env.NODE_ENV
render(<Demo />, document.getElementById('demo'))

import * as React from 'react';
import { render } from 'react-dom';
import ReactTinyLink from "../ReactTinyLink";

class Demo extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center">React Tiny Link Demo</h1>
        <ul>

          <li>
            Standard URL link:
            <ReactTinyLink url="https://google.com" />
          </li>
          <li>
            YouTube Link:

            <ReactTinyLink url="https://www.youtube.com/watch?v=Kgm85SB_lqg" />
          </li>
          <li>
            Amazon Link:

            <ReactTinyLink url="https://www.amazon.co.uk/dp/B0791RGQW3/ref=gw_uk_desk_h1_smp_tkl_DHevergreen?pf_rd_p=84c67158-b070-4e4e-a9c5-76f05977692e&pf_rd_r=HMWFKQAEQ4K8J066KWEZ" />
          </li>
          <li>
            Image:

            <ReactTinyLink url="https://cdn-images-1.medium.com/max/1200/1*iePG8qczEBX1ICAMR5U-JQ.png" />
          </li>
        </ul>
        
      </div>
    );
  }
}

render(<Demo />, document.getElementById('demo'));

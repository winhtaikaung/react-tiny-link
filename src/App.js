import React, { Component } from 'react';

import ReactTinyLink from './ReactTinyLink';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ReactTinyLink
          cardSize="small"
          showGraphic={true}
          maxLine={2}
          minLine={1}
          // url="https://www.amazon.com/Steve-Madden-Mens-Jagwar-10-5/dp/B016X44MKA/ref=lp_18637582011_1_1?srs=18637582011&ie=UTF8&qid=1550721409&sr=8-1"
          // url="https://cdn.perxtech.io/perx-wallet-img-gen?total_stamps=10&col_count=5&reward_points=5&margin_y=60&margin_x=40&chop_w=120&chop_h=120&width=1024&height=512&background=bb8c54&stamp_points=1,2&Hello.png"
          // url="https://twitter.com/i/status/1098405500767686656"
          // url="http://www.hochmuth.com/mp3/Haydn_Cello_Concerto_D-1.mp3"
          url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
          // url="https://www.youtube.com/watch?v=plEcjL3XZz8"
        />
      </React.Fragment>
    );
  }
}

export default App;

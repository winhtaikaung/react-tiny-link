import * as React from 'react';
import { Media, Video } from './Card';
import { ReactTinyLinkType } from '../ReactTinyLinkTypes';

const CardMedia = ({ data, cardSize, autoPlay }) => {
  return (
    <React.Fragment>
      {data.type !== ReactTinyLinkType.TYPE_VIDEO && (
        <Media
          className="react_tinylink_card_media"
          cardSize={cardSize}
          src={data.image && data.image[0]}
          type={data.type}
        />
      )}
      {data.type && data.type === ReactTinyLinkType.TYPE_VIDEO && (
        <Media
          className="react_tinylink_card_media"
          cardSize={cardSize}
          src={data.video && data.video[0]}
          type={data.type}
        >
          <Video
            muted
            onCanPlayThrough={e => {
              let video = e.target;
              setTimeout(() => {
                video.pause();
              }, 1000);
            }}
            autoPlay={autoPlay}
            src={data.video[0]}
          />
        </Media>
      )}
    </React.Fragment>
  );
};

export default CardMedia;

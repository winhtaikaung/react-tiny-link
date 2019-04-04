import * as React from 'react';
import { Media, Video } from './Card';
import { TYPE_VIDEO } from '../rules';

const CardMedia = ({ linkMeta, cardSize, autoPlay }) => {
  return (
    <React.Fragment>
      {linkMeta.data.type !== TYPE_VIDEO && (
        <Media
          className="react_tinylink_card_media"
          cardSize={cardSize}
          src={linkMeta.data.image && linkMeta.data.image[0]}
          type={linkMeta.data.type}
        />
      )}
      {linkMeta.data.type && linkMeta.data.type === TYPE_VIDEO && (
        <Media
          className="react_tinylink_card_media"
          cardSize={cardSize}
          src={linkMeta.data.video && linkMeta.data.video[0]}
          type={linkMeta.data.type}
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
            src={linkMeta.data.video[0]}
          />
        </Media>
      )}
    </React.Fragment>
  );
};

export default CardMedia;

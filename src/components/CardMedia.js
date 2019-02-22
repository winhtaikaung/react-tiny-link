import React, { Fragment } from 'react';
import { Media, Video } from './Card';
import { TYPE_VIDEO } from '../rules';

const CardMedia = ({ linkMeta, cardSize,autoPlay }) => {
    console.log(linkMeta.data)
  return (
    <Fragment>
      
      {(linkMeta.data.type!==TYPE_VIDEO)&& <Media
        className="react_tinylink_card_media"
        cardSize={cardSize}
        src={linkMeta.data.image && linkMeta.data.image[0]}
      >
      
      </Media>}
      {(linkMeta.data.type && linkMeta.data.type===TYPE_VIDEO)&&<Media
        className="react_tinylink_card_media"
        cardSize={cardSize}
        src={linkMeta.data.video && linkMeta.data.video[0]}
      ><Video muted autoPlay={autoPlay} src={linkMeta.data.video[0]}/></Media>}
    </Fragment>
  );
};

export default CardMedia;

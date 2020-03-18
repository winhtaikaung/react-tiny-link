import * as React from 'react'
import { Media, Video } from './Card'
import { ReactTinyLinkType } from '../ReactTinyLinkTypes'

const CardMedia = ({ data, cardSize, autoPlay, isShowDescription }) => {
  return (
    <>
      {data.type !== ReactTinyLinkType.TYPE_VIDEO && (
        <Media
          className="react_tinylink_card_media"
          cardSize={cardSize}
          src={data.image && data.image[0]}
          type={data.type}
          style={{ WebkitFilter: 'blur(10px)', filter: 'blur(10px)' }}
          isShowDescription={isShowDescription}
        >
          <img
            style={{ display: `none` }}
            src={data.image && data.image[0]}
            onError={(e: any) => {
              e.target.parentElement.style.filter = ''
            }}
            onLoad={(e: any) => {
              e.target.parentElement.style.filter = ''
            }}
          />
        </Media>
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
              let video = e.target
              setTimeout(() => {
                video.pause()
              }, 1000)
            }}
            autoPlay={autoPlay}
            src={data.video[0]}
          />
        </Media>
      )}
    </>
  )
}

export default CardMedia

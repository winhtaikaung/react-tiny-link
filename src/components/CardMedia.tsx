import * as React from 'react'
import { Media, Video } from './Card'
import { ReactTinyLinkType } from '../ReactTinyLinkTypes'
import { isValidImageURL, isValidVideoURL, findFirstSecureUrl } from '../utils'

const ImageWrapper = ({data, secureImageUrl, onlySecure}) => {
  if (onlySecure && !secureImageUrl) return null
  const imageUrl = data.image && ((onlySecure && secureImageUrl) ? secureImageUrl : data.image[0])

  if (!imageUrl) {
    return null
  }

  return <img
          style={{ display: `none` }}
          src={imageUrl}
          onError={(e: any) => {
            e.target.parentElement.style.filter = ''
          }}
          onLoad={(e: any) => {
            e.target.parentElement.style.filter = ''
          }}
          />

}

const VideoWrapper = ({data, secureVideoUrl, onlySecure, autoPlay}) => {
  if (onlySecure && !secureVideoUrl) return null
  const videoUrl = data.video && ((onlySecure && secureVideoUrl) ? secureVideoUrl : data.video[0])

  if (!videoUrl) {
    return null
  }

  return <Video
          muted
          onCanPlayThrough={e => {
            let video = e.target
            setTimeout(() => {
              video.pause()
            }, 1000)
          }}
          autoPlay={autoPlay}
          src={videoUrl}
          />

}


const CardMedia = ({ data, cardSize, autoPlay, onlySecure }) => {
  const secureImageUrl = data.image && findFirstSecureUrl(data.image, isValidImageURL)
  const secureVideoUrl = data.video && findFirstSecureUrl(data.video, isValidVideoURL)
  
  return (
    <>
      {data.type !== ReactTinyLinkType.TYPE_VIDEO && (
        <Media
          className="react_tinylink_card_media"
          cardSize={cardSize}
          src={data.image && (secureImageUrl ? secureImageUrl : data.image[0])}
          type={data.type}
          style={{ WebkitFilter: 'blur(10px)', filter: 'blur(10px)' }}
        >
          <ImageWrapper data={data} secureImageUrl={secureImageUrl} onlySecure={onlySecure}/>
        </Media>
      )}
      {data.type && data.type === ReactTinyLinkType.TYPE_VIDEO && (
        <Media
          className="react_tinylink_card_media"
          cardSize={cardSize}
          src={data.video && (secureVideoUrl ? secureVideoUrl : data.video[0])}
          type={data.type}
        >
         <VideoWrapper data={data} secureVideoUrl={secureVideoUrl} autoPlay={autoPlay} onlySecure={onlySecure}/>
        </Media>
      )}
    </>
  )
}

export default CardMedia

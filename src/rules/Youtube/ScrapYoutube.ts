import { ReactTinyLinkType } from '../../ReactTinyLinkTypes'
import { isEmpty, getYoutTubeVideoId, getAttrOfDocElement } from '../utils'

export const ScrapYoutube = async (url, htmlDoc, defaultMedia) => {
  const id = getYoutTubeVideoId(url)
  const image = [
    getAttrOfDocElement(htmlDoc, 'meta[property="og:image"]', 'content'),
    `https://img.youtube.com/vi/${id}/0.jpg`,
    `https://img.youtube.com/vi/${id}/1.jpg`,
    `https://img.youtube.com/vi/${id}/2.jpg`,
    `https://img.youtube.com/vi/${id}/3.jpg`,
  ]

  return {
    title: getAttrOfDocElement(htmlDoc, "meta[property='og:title']", 'content'),
    url: getAttrOfDocElement(htmlDoc, "meta[property='og:url']", 'content'),
    description: getAttrOfDocElement(htmlDoc, "meta[property='og:description']", 'content'),
    type: ReactTinyLinkType.TYPE_YOUTUBE,
    video: [],
    image: !defaultMedia ? image.filter(i => !isEmpty(i)) : [...image, defaultMedia].filter(i => !isEmpty(i)),

  }
}

import { ReactTinyLinkType } from '../../ReactTinyLinkTypes'
import { isEmpty, getAttrOfDocElement, fixRelativeUrls, getBaseUrl } from '../utils'

export default async (url, htmlDoc, defaultMedia) => {
  let baseUrl = getBaseUrl(htmlDoc, url)

  const image = [
    getAttrOfDocElement(htmlDoc, "meta[property='og:image']", 'content'),
    getAttrOfDocElement(htmlDoc, "meta[property='og:image:user_generated']", 'content'),
  ]
    .filter(i => !isEmpty(i))
    .map(i => fixRelativeUrls(baseUrl, i))

  const video = [
    getAttrOfDocElement(htmlDoc, "meta[property='og:video:url']", 'content'),
    getAttrOfDocElement(htmlDoc, "meta[property='og:video:secure_url']", 'content'),
  ]
    .filter(i => !isEmpty(i))
    .map(i => fixRelativeUrls(baseUrl, i))
    
  return {
    title: getAttrOfDocElement(htmlDoc, "meta[property='og:title']", 'content'),
    description: getAttrOfDocElement(htmlDoc, "meta[property='og:description']", 'content'),
    url: getAttrOfDocElement(htmlDoc, "meta[property='og:url']", 'content'),
    video: video,
    image: !defaultMedia
      ? image
      : [...image, defaultMedia].filter(i => !isEmpty(i)),
    type: ReactTinyLinkType.TYPE_TWITTER, // MIME Type
    publisher: ["Twitter"]
  }
}

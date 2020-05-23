import { ReactTinyLinkType } from '../../ReactTinyLinkTypes'
import { isEmpty, getTitleOfDoc, getAttrOfDocElement, fixRelativeUrls } from '../utils'

export default async (url, htmlDoc, defaultMedia) => {
  let baseUrl = getAttrOfDocElement(htmlDoc, 'base', 'href')
  if (!baseUrl) {
    baseUrl = url
  }
  const image = [
    getAttrOfDocElement(htmlDoc, 'meta[name="twitter:image:src"]', 'content')
  ]
  return {
    title: getTitleOfDoc(htmlDoc),
    content: getAttrOfDocElement(htmlDoc, "meta[name='description']", 'content'),
    url: getAttrOfDocElement(htmlDoc, "meta[property='og:url']", 'content'),
    image: !defaultMedia
      ? image.filter(i => !isEmpty(i)).map(i => fixRelativeUrls(baseUrl, i))
      : [...image, defaultMedia].filter(i => !isEmpty(i)),
    description: getAttrOfDocElement(htmlDoc, "meta[name='description']", 'content'),
    video: [],
    type: ReactTinyLinkType.TYPE_BOARDGAMEGEEK, // MIME Type
    publisher: ['BoardGameGeek'],
  }
}

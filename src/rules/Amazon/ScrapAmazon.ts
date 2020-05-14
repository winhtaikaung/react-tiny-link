import { ReactTinyLinkType } from '../../ReactTinyLinkTypes'
import { isEmpty, getTitleOfDoc, getAttrOfDocElement, fixRelativeUrls, getBaseUrl } from '../utils'

export default async (url, htmlDoc, defaultMedia) => {
  let baseUrl = getBaseUrl(htmlDoc, url)

  const image = [
    getAttrOfDocElement(htmlDoc, '.a-dynamic-image', 'data-old-hires'),
    getAttrOfDocElement(htmlDoc, '.a-dynamic-image', 'src'),
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
    type: ReactTinyLinkType.TYPE_AMAZON, // MIME Type
    publisher: ['Amazon'],
  }
}

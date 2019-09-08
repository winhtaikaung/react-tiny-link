import { ReactTinyLinkType } from '../../ReactTinyLinkTypes'
import { getTitleOfDoc, getAttrOfDocElement, getInstagramVideo, isEmpty } from '../utils'

export default async (url: string, htmlDoc, data, defaultMedia) => {
  let baseUrl = getAttrOfDocElement(htmlDoc, 'base', 'href')
  if (!baseUrl) {
    baseUrl = url
  }

  return {
    title: getTitleOfDoc(htmlDoc),
    content: getAttrOfDocElement(htmlDoc, "meta[name='description']", 'content'),
    url: getAttrOfDocElement(htmlDoc, "meta[property='og:url']", 'content'),
    description: getAttrOfDocElement(htmlDoc, "meta[name='description']", 'content'),
    video: data.includes('video_url')
      ? [
        getInstagramVideo(data),
        getAttrOfDocElement(htmlDoc, 'meta[property="og:video"]', 'content'),
        defaultMedia,
      ].filter(i => !isEmpty(i))
      : [],
    image: data.includes('video_url')
      ? []
      : [
        getAttrOfDocElement(htmlDoc, 'meta[property="og:logo"]', 'content'),
        getAttrOfDocElement(htmlDoc, 'meta[itemprop="logo"]', 'content'),
        getAttrOfDocElement(htmlDoc, 'img[itemprop="logo"]', 'src'),
        getAttrOfDocElement(htmlDoc, "meta[property='og:image']", 'content'),
        getAttrOfDocElement(htmlDoc, 'img[class*="logo" i]', 'src'),
        getAttrOfDocElement(htmlDoc, 'img[src*="logo" i]', 'src'),
        getAttrOfDocElement(htmlDoc, 'meta[property="og:image:secure_url"]', 'content'),
        getAttrOfDocElement(htmlDoc, 'meta[property="og:image:url"]', 'content'),
        getAttrOfDocElement(htmlDoc, 'meta[property="og:image"]', 'content'),
        getAttrOfDocElement(htmlDoc, 'meta[name="twitter:image:src"]', 'content'),
        getAttrOfDocElement(htmlDoc, 'meta[name="twitter:image"]', 'content'),
        getAttrOfDocElement(htmlDoc, 'meta[itemprop="image"]', 'content'),
        defaultMedia,
      ].filter(i => !isEmpty(i)),
    type: data.includes('video_url') ? ReactTinyLinkType.TYPE_VIDEO : ReactTinyLinkType.TYPE_IMAGE, // MIME Type
  }
}

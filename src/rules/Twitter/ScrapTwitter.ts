import { ReactTinyLinkType } from '../../ReactTinyLinkTypes'
import { isEmpty, getAttrOfDocElement, fixRelativeUrls, getBaseUrl } from '../utils'

export default async (url, data, htmlDoc, defaultMedia) => {
  const scrappedData = JSON.parse(data)
  const htmlElement = document.createElement(`html`)
  htmlElement.innerHTML = scrappedData.html

  let baseUrl = getBaseUrl(htmlDoc, url)

  const image = [
    getAttrOfDocElement(htmlDoc, "meta[property='og:image']", 'content'),
    getAttrOfDocElement(htmlDoc, "meta[property='og:image:user_generated']", 'content'),
    'https://help.twitter.com/content/dam/help-twitter/twitter-logo.png',
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
    title: htmlElement.querySelector('p').textContent,
    description: scrappedData.author_name,
    url: getAttrOfDocElement(htmlDoc, "meta[property='og:url']", 'content'),
    video: video,
    image: !defaultMedia ? image : [...image, defaultMedia].filter(i => !isEmpty(i)),
    type: ReactTinyLinkType.TYPE_TWITTER, // MIME Type
    publisher: ['Twitter'],
  }
}

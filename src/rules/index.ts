import {
  isVideo,
  isAudio,
  isImage,
  isYoutubeUrl,
  isAmazonUrl,
  isEmpty,
  isInstagramUrl,
  isBoardGameGeekUrl,
  isTwitterUrl,
} from './utils'
import ScrapVideo from './Video/ScrapVideo'
import ScrapAudio from './Audio/ScrapAudio'
import ScrapImage from './Image/ScrapImage'
import ScrapYoutube from './Youtube/ScrapYoutube'
import ScrapAmazon from './Amazon/ScrapAmazon'
import ScrapDefault from './Default/ScrapDefault'
import ScrapInstagram from './Instagram/ScrapInstagram'
import ScrapBoardGameGeek from './BoardGameGeek/ScrapBoardGameGeek'
import ScrapTwitter from './Twitter/ScrapTwitter'

export default async (url: string, httpClient, defaultMedia: string[]) => {
  if (!isEmpty(url)) {
    const response = await httpClient
    const mimeType = response.headers.get('content-type')
    const data = await response.text()
    const htmlDoc = new DOMParser().parseFromString(data, 'text/html')
    if (isVideo(mimeType)) {
      return await ScrapVideo(url, defaultMedia)
    } else if (isAudio(mimeType)) {
      return await ScrapAudio(url, defaultMedia)
    } else if (isImage(mimeType)) {
      return await ScrapImage(url, defaultMedia)
    } else if (isInstagramUrl(url)) {
      return await ScrapInstagram(url, data, defaultMedia)
    } else if (isYoutubeUrl(url)) {
      return await ScrapYoutube(url, htmlDoc, defaultMedia)
    } else if (isAmazonUrl(url)) {
      return await ScrapAmazon(url, htmlDoc, defaultMedia)
    } else if (isBoardGameGeekUrl(url)) {
      return await ScrapBoardGameGeek(url, htmlDoc, defaultMedia)
    } else if (isTwitterUrl(url)) {
      return await ScrapTwitter(url, data, htmlDoc, defaultMedia)
    } else {
      return await ScrapDefault(url, htmlDoc, defaultMedia)
    }
  }
}

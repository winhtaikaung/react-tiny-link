const REGEX_AMAZON_URL = /https?:\/\/(.*amazon\..*\/.*|.*amzn\..*\/.*|.*a\.co\/.*)/i
export const isAmazonUrl = url => REGEX_AMAZON_URL.test(url)

const REGEX_YOUTUBE = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/gi
export const isYoutubeUrl = url => !!url.toString().match(REGEX_YOUTUBE)

const REGEX_INSTAGRAM = /(https?:\/\/www\.)?instagram\.com(\/p\/\w+\/?)/gi
export const isInstagramUrl = url => !!url.toString().match(REGEX_INSTAGRAM)

const REGEX_BOARDGAMEGEEK = /(https?:\/\/www\.)?boardgamegeek\.com(\/boardgame\/\w+\/\w+\/?)/gi
export const isBoardGameGeekUrl = url => !!url.toString().match(REGEX_BOARDGAMEGEEK)

const REGEX_TWITTER = /(https?:\/\/(www)?\.?)?twitter\.com\/.+/gi
export const isTwitterUrl = url => !!url.toString().match(REGEX_TWITTER)

export const isEmpty = (value: any) => {
  let isEmptyObject = function(a) {
    if (typeof a.length === 'undefined') {
      // it's an Object, not an Array
      let hasNonempty = Object.keys(a).some(function nonEmpty(element) {
        return !isEmpty(a[element])
      })
      return hasNonempty ? false : isEmptyObject(Object.keys(a))
    }

    return !a.some(function nonEmpty(element) {
      // check if array is really not empty as JS thinks
      return !isEmpty(element) // at least one element should be non-empty
    })
  }
  return (
    value == false ||
    typeof value === 'undefined' ||
    value == null ||
    (typeof value === 'object' && isEmptyObject(value))
  )
}

export const isAudio = (mimeType: string) => mimeType.startsWith('audio/')
export const isVideo = (mimeType: string) => mimeType.startsWith('video/')
export const isImage = (mimeType: string) => mimeType.startsWith('image/')

// Basic Scrap Helpers
export const getTitleOfDoc = (htmlDoc: any) => {
  const titleEl = htmlDoc.querySelector('title')
  if (!titleEl) {
    return null
  }
  return titleEl.innerText
}

export const getAttrOfDocElement = (htmlDoc: any, query: string, attr: string) => {
  const el = htmlDoc.querySelector(query)
  if (!el) {
    return null
  }
  return el.getAttribute(attr)
}

export const getYoutTubeVideoId = (url: string) => {
  const parsed = url.match(/^.*((m\.)?youtu\.be\/|vi?\/|u\/\w\/|embed\/|\?vi?=|\&vi?=)([^#\&\?]*).*/)

  if (parsed && parsed[3]) {
    return parsed[3]
  } else {
    return null
  }
}

export const getInstagramVideo = (htmlDoc: any) => {
  const videoLinkMatcher = /(?:"video_url":")(.*?)(?:")/g
  if (videoLinkMatcher.test(htmlDoc)) {
    const videoMatches = videoLinkMatcher.exec(htmlDoc)
    if (videoMatches && videoMatches.length !== 0) {
      return videoMatches[0].split('":"')[1].replace('"', '')
    }
  }
  return null
}

export const fixRelativeUrls = (baseUrl: string, itemUrl: string) => {
  const normalizedUrl = itemUrl.toLocaleLowerCase()
  if (normalizedUrl.startsWith('http://') || normalizedUrl.startsWith('https://')) {
    return itemUrl
  }
  return new URL(itemUrl, baseUrl).href
}

export const getBaseUrl = (htmlDoc: any, url: string) => getAttrOfDocElement(htmlDoc, 'base', 'href') || new URL(url).origin

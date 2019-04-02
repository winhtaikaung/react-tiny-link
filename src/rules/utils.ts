const REGEX_AMAZON_URL = /https?:\/\/(.*amazon\..*\/.*|.*amzn\..*\/.*|.*a\.co\/.*)/i
export const isAmazonUrl = url => REGEX_AMAZON_URL.test(url)

const REGEX_YOUTUBE = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/g
export const isYoutubeUrl = url => REGEX_YOUTUBE.test(url)

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

export const getVideoId = (url: string) => {
  let video_id = url.split('v=')[1]
  let ampersandPosition = video_id.indexOf('&')
  if (ampersandPosition != -1) {
    video_id = video_id.substring(0, ampersandPosition)
  }
  return video_id
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

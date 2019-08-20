import { ReactTinyLinkType } from '../../ReactTinyLinkTypes'
import { isEmpty } from '../utils'

export const ScrapVideo = async (url, defaultMedia) => {
  return {
    title: url.substring(url.lastIndexOf('/') + 1),
    description: url,
    image: [],
    video: [url, defaultMedia].filter(i => !isEmpty(i)),
    url: url,
    type: ReactTinyLinkType.TYPE_VIDEO,
  }
}

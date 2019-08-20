import { ReactTinyLinkType } from '../../ReactTinyLinkTypes'
import { isEmpty } from '../utils'

export const ScrapAudio = async (url, defaultMedia) => {
  return {
    title: url.substring(url.lastIndexOf('/') + 1),
    description: url.substring(url.lastIndexOf('/') + 1),
    url: url,
    image: [defaultMedia].filter(i => !isEmpty(i)),
    video: [],
    type: ReactTinyLinkType.TYPE_AUDIO,
  }
}

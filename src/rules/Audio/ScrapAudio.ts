import { ReactTinyLinkType } from '../../ReactTinyLinkTypes'
import { isEmpty } from '../utils'

export default async (url: string, defaultMedia: string[]) => {
  return {
    title: url.substring(url.lastIndexOf('/') + 1),
    description: url.substring(url.lastIndexOf('/') + 1),
    url: url,
    image: [defaultMedia].filter(i => !isEmpty(i)),
    video: [],
    type: ReactTinyLinkType.TYPE_AUDIO,
  }
}

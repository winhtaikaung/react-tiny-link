import { ReactTinyLinkType } from '../../ReactTinyLinkTypes'
import { isEmpty } from '../utils'

export default async (url: string, defaultMedia: string[]) => {
  return {
    title: url.substring(url.lastIndexOf('/') + 1),
    description: url,
    image: [],
    video: [url, defaultMedia].filter(i => !isEmpty(i)),
    url: url,
    type: ReactTinyLinkType.TYPE_VIDEO,
  }
}

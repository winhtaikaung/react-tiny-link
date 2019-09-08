import { ReactTinyLinkType } from '../../ReactTinyLinkTypes'
import { isEmpty } from '../utils'

export default async (url: string, defaultMedia: string[]) => ({
  title: url.substring(url.lastIndexOf('/') + 1),
  description: url.substring(url.lastIndexOf('/') + 1),
  url: url,
  video: [],
  image: [url, defaultMedia].filter(i => !isEmpty(i)),
  type: ReactTinyLinkType.TYPE_IMAGE,
})

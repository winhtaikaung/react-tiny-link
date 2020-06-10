import { ReactTinyLinkType } from '../../ReactTinyLinkTypes'
import { isEmpty } from '../utils'

export default async (url: string, data, defaultMedia) => {
  const scrappedData = JSON.parse(data)
  return {
    title: scrappedData.title,
    content: url,
    url: url,
    description: scrappedData.title,
    video: null,
    image: !defaultMedia
      ? [scrappedData.thumbnail_url]
      : [scrappedData.thumbnail_url, defaultMedia].filter(i => !isEmpty(i)),
    type: ReactTinyLinkType.TYPE_IMAGE, // MIME Type
  }
}

import { ReactTinyLinkType } from '../../ReactTinyLinkTypes'
import { isEmpty } from '../utils'

export default async (url: string, data, defaultMedia) => {
  const scrappedData = JSON.parse(data)

  return {
    title: scrappedData.graphql.shortcode_media.accessibility_caption,
    content: url,
    url: url,
    description: scrappedData.title,
    video: null,
    image: !defaultMedia
      ? [scrappedData.graphql.shortcode_media.display_url]
      : [scrappedData.graphql.shortcode_media.display_url, defaultMedia].filter(i => !isEmpty(i)),
    type: ReactTinyLinkType.TYPE_IMAGE, // MIME Type
  }
}

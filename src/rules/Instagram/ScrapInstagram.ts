import { ReactTinyLinkType } from '../../ReactTinyLinkTypes'

export default async (url: string, data) => {
  const scrappedData = JSON.parse(data)
  return {
    title: scrappedData.title,
    content: url,
    url: url,
    description: scrappedData.title,
    video: null,
    image: [scrappedData.thumbnail_url],
    type: ReactTinyLinkType.TYPE_IMAGE, // MIME Type
  }
}

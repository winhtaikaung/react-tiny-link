import { ReactTinyLinkType } from '../../ReactTinyLinkTypes';

export const ScrapVideo = async url => {
  return {
    title: url.substring(url.lastIndexOf('/') + 1),
    description: url,
    image: [],
    video: [url],
    url: url,
    type: ReactTinyLinkType.TYPE_VIDEO,
  };
};

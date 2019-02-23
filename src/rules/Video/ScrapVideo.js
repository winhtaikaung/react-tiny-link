import { TYPE_VIDEO } from '../index';

export const ScrapVideo = async url => {
  return {
    title: url.substring(url.lastIndexOf('/') + 1),
    description: url,
    image: [],
    video: [url],
    type: TYPE_VIDEO,
  };
};

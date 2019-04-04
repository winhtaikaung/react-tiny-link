import { TYPE_IMAGE } from '../index';
import { isEmpty } from '../utils';

export const ScrapImage = async url => ({
  title: url.substring(url.lastIndexOf('/') + 1),
  description: url.substring(url.lastIndexOf('/') + 1),
  url: url,
  video: [],
  image: [url].filter(i => !isEmpty(i)),
  type: TYPE_IMAGE,
});

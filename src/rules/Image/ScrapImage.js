import { TYPE_IMAGE } from '../index';
import isEmpty from 'lodash/isEmpty';
export const ScrapImage = async ($, url) => ({
  title: url.substring(url.lastIndexOf('/') + 1),
  description: url.substring(url.lastIndexOf('/') + 1),
  image: [
    url,
    $("meta[property='og:image']").attr('content'),
    $('meta[property="og:image:secure_url"]').attr('content'),
    $('meta[property="og:image:url"]').attr('content'),
    $('meta[property="og:image"]').attr('content'),
    $('meta[name="twitter:image:src"]').attr('content'),
    $('meta[name="twitter:image"]').attr('content'),
    $('meta[itemprop="image"]').attr('content'),
  ].filter(i => !isEmpty(i)),
  type: TYPE_IMAGE,
});

import { TYPE_DEFAULT } from '..';
import isEmpty from 'lodash/isEmpty';
export default async ($, url) => {
  return {
    title: $('title').text(),
    content: $("meta[name='description']").attr('content'),
    url: $("meta[property='og:url']").attr('content'),
    description: $("meta[name='description']").attr('content'),
    image: [
      $('meta[property="og:logo"]').attr('content'),
      $('meta[itemprop="logo"]').attr('content'),
      $('img[itemprop="logo"]').attr('src'),
      $("meta[property='og:image']").attr('content'),
      $('img[class*="logo" i]').attr('src'),
      $('img[src*="logo" i]').attr('src'),
      $('meta[property="og:image:secure_url"]').attr('content'),
      $('meta[property="og:image:url"]').attr('content'),
      $('meta[property="og:image"]').attr('content'),
      $('meta[name="twitter:image:src"]').attr('content'),
      $('meta[name="twitter:image"]').attr('content'),
      $('meta[itemprop="image"]').attr('content'),
    ].filter(i => !isEmpty(i)),
    type: TYPE_DEFAULT, // MIME Type
  };
};

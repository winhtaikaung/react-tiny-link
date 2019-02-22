import {TYPE_IMAGE} from '../index'
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
  ],
  type:TYPE_IMAGE
});

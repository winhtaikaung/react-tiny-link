import { $filter } from '../utils';
const getSrc = el => el.attr('src');
export const ScrapImage = $ => ({
  image: [
    $('meta[property="og:image:secure_url"]').attr('content'),
    $('meta[property="og:image:url"]').attr('content'),
    $('meta[property="og:image"]').attr('content'),
    $('meta[name="twitter:image:src"]').attr('content'),
    $('meta[name="twitter:image"]').attr('content'),
    $('meta[itemprop="image"]').attr('content'),
    $filter($, $('article img[src]'), getSrc),
    $filter($, $('#content img[src]'), getSrc),
    $('img[alt*="author" i]').attr('src'),
    $('img[src]').attr('src'),
  ],
});

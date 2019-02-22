import { isVideo, isAudio, isImage, isYoutubeUrl, isAmazonUrl } from './utils';
import isEmpty from 'lodash/isEmpty';
import { ScrapVideo } from './Video/ScrapVideo';
import { ScrapAudio } from './Audio/ScrapAudio';
import { ScrapImage } from './Image/ScrapImage';
import cheerio from 'cheerio';
import { ScrapYoutube } from './Youtube/ScrapYoutube';
import { ScrapAmazon } from './Amazon/ScrapAmazon';

export const TYPE_AMAZON = 'TYPE_AMAZON';
export const TYPE_YOUTUBE = 'TYPE_YOUTUBE';
export const TYPE_AUDIO = 'TYPE_AUDIO';
export const TYPE_VIDEO = 'TYPE_VIDEO';
export const TYPE_IMAGE = 'TYPE_IMAGE';
export const TYPE_DEFAULT = 'TYPE_DEFAULT';

export const ScraperWraper = async ({ proxiedUrl, url }, httpClient) => {
  if (!isEmpty(url)) {
    if (isVideo(url)) {
      return await ScrapVideo(url);
    }

    if (isAudio(url)) {
      return await ScrapAudio(url);
    }

    if (isImage(url)) {
      console.log('BEFORE_SCRAP');
      const response = await httpClient.get(proxiedUrl);
      const $ = cheerio.load(response.data);
      return await ScrapImage($, url);
    }

    if (isYoutubeUrl(url)) {
      const response = await httpClient.get(proxiedUrl);
      const $ = cheerio.load(response.data);
      return await ScrapYoutube($, url);
    }

    if (isAmazonUrl(url)) {
      const response = await httpClient.get(proxiedUrl);
      const $ = cheerio.load(response.data);
      return await ScrapAmazon($, url);
    }
  }
};

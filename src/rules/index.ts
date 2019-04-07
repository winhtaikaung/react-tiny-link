import {
  isVideo,
  isAudio,
  isImage,
  isYoutubeUrl,
  isAmazonUrl,
  isEmpty,
} from './utils';
import { ScrapVideo } from './Video/ScrapVideo';
import { ScrapAudio } from './Audio/ScrapAudio';
import { ScrapImage } from './Image/ScrapImage';
import { ScrapYoutube } from './Youtube/ScrapYoutube';
import { ScrapAmazon } from './Amazon/ScrapAmazon';
import ScrapDefault from './Default/ScrapDefault';

export const ScraperWraper = async (url, httpClient) => {
  if (!isEmpty(url)) {
    const response = await httpClient;
    const mimeType = response.headers.get('content-type');
    const data = await response.text();
    if (isVideo(mimeType)) {
      return await ScrapVideo(url);
    } else if (isAudio(mimeType)) {
      return await ScrapAudio(url);
    } else if (isImage(mimeType)) {
      return await ScrapImage(url);
    } else if (isYoutubeUrl(url)) {
      let htmlDoc = new DOMParser().parseFromString(data, 'text/html');
      return await ScrapYoutube(url, htmlDoc);
    } else if (isAmazonUrl(url)) {
      let htmlDoc = new DOMParser().parseFromString(data, 'text/html');
      return await ScrapAmazon(url, htmlDoc);
    } else {
      let htmlDoc = new DOMParser().parseFromString(data, 'text/html');
      const resp = await ScrapDefault(url, htmlDoc);
      return resp;
    }
  }
};

import getVideoId from 'get-video-id';
import isEmpty from 'lodash/isEmpty';

const titleRegex = /"videoPrimaryInfoRenderer":{"title":{"simpleText":"(.+?)"}}/g;

export const ScrapYoutube = async ($, url) => {
  const { id } = getVideoId(url);
  try {
    const {
      videoPrimaryInfoRenderer: {
        title: { simpleText },
      },
    } = JSON.parse(`{${$.html().match(titleRegex)[0]}}}}`);
    return {
      title: simpleText,
      url: url,
      description: url,
      image: [
        `https://img.youtube.com/vi/${id}/0.jpg`,
        `https://img.youtube.com/vi/${id}/1.jpg`,
        `https://img.youtube.com/vi/${id}/2.jpg`,
        `https://img.youtube.com/vi/${id}/3.jpg`,
      ].filter(i => !isEmpty(i)),
    };
  } catch (error) {
    return {
      title: $('title').text(),
      url: url,
      description: url,
      image: [
        `https://img.youtube.com/vi/${id}/0.jpg`,
        `https://img.youtube.com/vi/${id}/1.jpg`,
        `https://img.youtube.com/vi/${id}/2.jpg`,
        `https://img.youtube.com/vi/${id}/3.jpg`,
      ].filter(i => !isEmpty(i)),
    };
  }
};

import getVideoId from 'get-video-id';

const REGEX_YOUTUBE = /^(https?\:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/g;

const titleRegex = /"videoPrimaryInfoRenderer":{"title":{"simpleText":"(.+?)"}}/g;

export const isYoutubeUrl = (url) => REGEX_YOUTUBE.test(url);
export const ScrapYoutube = ($, url) => {
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
      ],
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
      ],
    };
  }
};

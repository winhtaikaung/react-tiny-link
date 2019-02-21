import getVideoId from 'get-video-id';

export const ScrapYoutube = ($, url) => {
  const { id } = getVideoId(url);

  return {
    publisher: [getVideoId(url).service === 'youtube' && 'YouTube'],
    image: [
      `https://img.youtube.com/vi/${id}/0.jpg`,
      `https://img.youtube.com/vi/${id}/1.jpg`,
      `https://img.youtube.com/vi/${id}/2.jpg`,
      `https://img.youtube.com/vi/${id}/3.jpg`,
    ],
  };
};

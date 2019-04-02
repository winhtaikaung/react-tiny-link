import getVideoId from "get-video-id";
import { TYPE_YOUTUBE } from "..";
import { isEmpty } from "../utils";

const titleRegex = /"videoPrimaryInfoRenderer":{"title":{"simpleText":"(.+?)"}}/g;

export const ScrapYoutube = async (url, htmlDoc) => {
  const { id } = getVideoId(url);
  try {
    const {
      videoPrimaryInfoRenderer: {
        title: { simpleText },
      },
    } = JSON.parse(`{${htmlDoc.innerHTML.match(titleRegex)[0]}}}}`);
    return {
      title: simpleText,
      url: url,
      description: url,
      type: TYPE_YOUTUBE,
      video: [],
      image: [
        `https://img.youtube.com/vi/${id}/0.jpg`,
        `https://img.youtube.com/vi/${id}/1.jpg`,
        `https://img.youtube.com/vi/${id}/2.jpg`,
        `https://img.youtube.com/vi/${id}/3.jpg`,
      ].filter(i => !isEmpty(i)),
    };
  } catch (error) {
    return {
      title: htmlDoc.queryselector('title').textContent,
      url: url,
      description: url,
      type: TYPE_YOUTUBE,
      video: [],
      image: [
        `https://img.youtube.com/vi/${id}/0.jpg`,
        `https://img.youtube.com/vi/${id}/1.jpg`,
        `https://img.youtube.com/vi/${id}/2.jpg`,
        `https://img.youtube.com/vi/${id}/3.jpg`,
      ].filter(i => !isEmpty(i)),
    };
  }
};

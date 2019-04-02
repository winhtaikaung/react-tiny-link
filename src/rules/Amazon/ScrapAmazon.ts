import { TYPE_AMAZON } from "../index";
import { isEmpty, getTitleOfDoc, getAttrOfDocElement, fixRelativeUrls } from "../utils";

export const ScrapAmazon = async (url, htmlDoc) => {
  let baseUrl = getAttrOfDocElement(htmlDoc, "base", 'href');
  if (!baseUrl) {
    baseUrl = url;
  }

  return {
    title: getTitleOfDoc(htmlDoc),
    content: getAttrOfDocElement(htmlDoc, "meta[name='description']", 'content'),
    url: getAttrOfDocElement(htmlDoc, "meta[property='og:url']", 'content'),
    image: [
      getAttrOfDocElement(htmlDoc, '.a-dynamic-image', 'data-old-hires'),
      getAttrOfDocElement(htmlDoc, '.a-dynamic-image', 'src'),
    ].filter(i => !isEmpty(i)).map((i => fixRelativeUrls(baseUrl, i))),
    description: getAttrOfDocElement(htmlDoc, "meta[name='description']", 'content'),
    video: [],
    type: TYPE_AMAZON, // MIME Type
    publisher: ['Amazon'],
  }
};

import { TYPE_AMAZON } from "../index";
import { isEmpty, getTitleOfDoc, getAttrOfDocElement } from "../utils";

export const ScrapAmazon = async (url, htmlDoc) => ({
  title: getTitleOfDoc(htmlDoc),
  content: getAttrOfDocElement(htmlDoc, "meta[name='description']", 'content'),
  url: getAttrOfDocElement(htmlDoc, "meta[property='og:url']", 'content'),
  image: [
    getAttrOfDocElement(htmlDoc, '.a-dynamic-image', 'data-old-hires'),
    getAttrOfDocElement(htmlDoc, '.a-dynamic-image', 'src'),
  ].filter(i => !isEmpty(i)),
  description: getAttrOfDocElement(htmlDoc, "meta[name='description']", 'content'),
  video: [],
  type: TYPE_AMAZON, // MIME Type
  publisher: ['Amazon'],
});

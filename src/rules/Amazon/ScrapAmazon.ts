import { TYPE_AMAZON } from "../index";
import isEmpty from "lodash/isEmpty";

export const ScrapAmazon = async ($, url) => ({
  title: $('title').text(),
  content: $("meta[name='description']").attr('content'),
  url: $("meta[property='og:url']").attr('content'),
  image: [
    $('.a-dynamic-image').attr('data-old-hires'),
    $('.a-dynamic-image').attr('src'),
  ].filter(i => !isEmpty(i)),
  description: $("meta[name='description']").attr('content'),
  video: [],
  type: TYPE_AMAZON, // MIME Type
  publisher: ['Amazon'],
});

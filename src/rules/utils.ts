const REGEX_AMAZON_URL = /https?:\/\/(.*amazon\..*\/.*|.*amzn\..*\/.*|.*a\.co\/.*)/i;
export const isAmazonUrl = url => REGEX_AMAZON_URL.test(url);

const REGEX_YOUTUBE = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/g;
export const isYoutubeUrl = url => REGEX_YOUTUBE.test(url);

const REGEX_ISEMPTY = /^\\s+$/;
export const isEmpty = (x: string) => {
  if (!x) { return true; }
  return REGEX_ISEMPTY.test(x);
}

export const isAudio = (mimeType: string) => mimeType.startsWith("audio/");
export const isVideo = (mimeType: string) => mimeType.startsWith("video/");
export const isImage = (mimeType: string) => mimeType.startsWith("image/");

// Basic Scrap Helpers
export const getTitleOfDoc = (htmlDoc: any) => {
  const titleEl = htmlDoc.querySelector('title');
  if (!titleEl) { return null; }
  return titleEl.innerText;
}

export const getAttrOfDocElement = (htmlDoc: any, query: string, attr: string) => {
  const el = htmlDoc.querySelector(query);
  if (!el) { return null; }
  return el.getAttribute(attr);
}
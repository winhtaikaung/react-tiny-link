import { css } from 'styled-components';

import imageExtensions from 'image-extensions';
import audioExtensions from 'audio-extensions';
import videoExtensions from 'video-extensions';

import path from 'path';

const REGEX_STRIP_WWW = /^www\./;
export const media = {
  mobile: (...args) => css`
    @media (max-width: 48em) {
      ${css(...args)};
    }
  `,
  desktop: (...args) => css`
    @media (max-width: 48em) {
      ${css(...args)};
    }
  `,
};

export const getHostname = href => {
  const { hostname } = new URL(href);
  return hostname.replace(REGEX_STRIP_WWW, '');
};

const REGEX_AMAZON_URL = /https?:\/\/(.*amazon\..*\/.*|.*amzn\..*\/.*|.*a\.co\/.*)/i;
export const isAmazonUrl = url => REGEX_AMAZON_URL.test(url);

const REGEX_YOUTUBE = /^(https?\:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/g;
export const isYoutubeUrl = (url) => REGEX_YOUTUBE.test(url);

export const isVideo = url =>
  videoExtensions.includes(
    path
      .extname(url)
      .slice(1)
      .toLowerCase(),
  );

export const isAudio = url =>
  audioExtensions.includes(
    path
      .extname(url)
      .slice(1)
      .toLowerCase(),
  );
export const isImage = url =>
  imageExtensions.includes(
    path
      .extname(url)
      .slice(1)
      .toLowerCase(),
  );
//Basic Scrap Helpers

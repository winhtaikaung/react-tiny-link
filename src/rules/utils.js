import { css } from 'styled-components';

import _imageExtensions from 'image-extensions';
import _audioExtensions from 'audio-extensions';
import _videoExtensions from 'video-extensions';

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

//Basic Scrap Helpers

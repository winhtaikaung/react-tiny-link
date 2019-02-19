import { css } from 'styled-components';

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

export const isLarge = cardSize => cardSize === 'large';

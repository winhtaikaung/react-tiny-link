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

export const isValidImageURL = src => {
  if (typeof src !== 'string') return false;
  return !!src.match(/\w+\.(apng|bmp|gif|ico|jpeg|png|svg|tiff|webp)$/gi);
}

export const isValidVideoURL = src => {
  if (typeof src !== 'string') return false;
  return !!src.match(/\w+\.(mp4|ogg|webm)$/gi);
}

export const findFirstSecureUrl = (records, condition) => {
  const result = records.find(record => condition(record) && record.startsWith('https://'));
  return result ? result : '';
}

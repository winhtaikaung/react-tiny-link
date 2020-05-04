import { css } from 'styled-components';
import { IReactTinyLinkData, ReactTinyLinkType } from './ReactTinyLinkTypes';

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
  return !!src.match(/\w+\.(a?png|gif|jpe?g|svg|webp)/gi)
}

export const isValidVideoURL = src => {
  if (typeof src !== 'string') return false;
  return !!src.match(/\w+\.(mp4|ogg|webm)/gi);
}

export const findFirstSecureUrl = (records, condition) => {
  const result = records.find(record => condition(record) && record.startsWith('https://'));
  return result ? result : '';
}

/**
 * @returns {IReactTinyLinkData} with default values.
 *
 * @param url url to fetch
 * @param defaultMedia media assigned to both the image and the video
 */
export function defaultData(url: string, defaultMedia: string[]): IReactTinyLinkData {
    return {
        title: url.substring(url.lastIndexOf('/') + 1),
        description: url.substring(url.lastIndexOf('/') + 1),
        image: defaultMedia,
        url: url,
        video: defaultMedia,
        type: ReactTinyLinkType.TYPE_DEFAULT,
    }
}

/** does nothing. Just here to have a constance reference */
export function noop() {
    return
}

/**
 * Wraps a promise to make it cancelable.
 *
 * from https://reactjs.org/blog/2015/12/16/ismounted-antipattern.html
 * defined by @istarkov at:
 * https://github.com/facebook/react/issues/5465#issuecomment-157888325
 */
export const makeCancelable = (promise) => {
  let hasCanceled_ = false;

  const wrappedPromise = new Promise((resolve, reject) => {
    promise.then(
      val => hasCanceled_ ? reject({isCanceled: true}) : resolve(val),
      error => hasCanceled_ ? reject({isCanceled: true}) : reject(error)
    );
  });

  return {
    promise: wrappedPromise,
    cancel() {
      hasCanceled_ = true;
    },
  };
};

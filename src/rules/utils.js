import { css } from 'styled-components';
import urlLib from 'url';

import fileExtension from 'file-extension';
import { chain, eq, get,isEmpty } from 'lodash';
import _imageExtensions from 'image-extensions';
import _audioExtensions from 'audio-extensions';
import _videoExtensions from 'video-extensions';

const isRelativeUrl = require('is-relative-url');
const isUri = require('is-uri')
const urlRegex = require('url-regex')({ exact: true });
const _normalizeUrl = require('normalize-url')
const { resolve: resolveUrl } = require('url')
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

const defaultFn = el => el.text().trim();
export const $filter = ($, domNodes, fn = defaultFn) => {
  const el = domNodes.filter((i, el) => fn($(el))).first();
  return fn(el);
};

const sanetizeUrl = (url, opts) =>
  _normalizeUrl(url, {
    stripWWW: false,
    sortQueryParameters: false,
    removeTrailingSlash: false,
    ...opts
  })
  const absoluteUrl = (baseUrl, relativePath) => {
    if (isEmpty(relativePath)) return baseUrl
    return resolveUrl(baseUrl, relativePath)
  }
const normalizeUrl = (baseUrl, relativePath, opts) => {
  return sanetizeUrl(absoluteUrl(baseUrl, relativePath), opts)
}

const VIDEO = 'video';
const AUDIO = 'audio';
const IMAGE = 'image';

const imageExtensions = chain(_imageExtensions)
  .difference(['gif'])
  .reduce((acc, ext) => ({ ...acc, [ext]: IMAGE }), {})
  .value();

const audioExtensions = chain(_audioExtensions)
  .difference(['mp4'])
  .reduce((acc, ext) => ({ ...acc, [ext]: AUDIO }), {})
  .value();

const videoExtensions = chain(_videoExtensions)
  .union(['gif'])
  .reduce((acc, ext) => ({ ...acc, [ext]: VIDEO }), {})
  .value();

const EXTENSIONS = {
  ...imageExtensions,
  ...audioExtensions,
  ...videoExtensions,
};

const isUrl = (url, { relative = false } = {}) =>
  relative ? isRelativeUrl(url) || urlRegex.test(url) : urlRegex.test(url);

const isMediaExtension = (url, type) =>
  eq(type, get(EXTENSIONS, extension(url)));

const isMediaUrl = (url, type, opts) =>
  isUrl(url, opts) && isMediaExtension(url, type);
export const isVideoUrl = (url, opts) => isMediaUrl(url, VIDEO, opts);

export const extension = (str = '') => {
  const urlObj = urlLib.parse(str);
  urlObj.hash = '';
  urlObj.search = '';
  return fileExtension(urlLib.format(urlObj));
};


export const url = (value, { url = '' } = {}) => {
  if (isEmpty(value)) return null

  try {
    const absoluteUrl = normalizeUrl(url, value)
    if (isUrl(absoluteUrl)) return absoluteUrl
  } catch (err) {}

  return isUri(value) ? value : null
}
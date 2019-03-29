const imageExtensions = require("image-extensions");
const audioExtensions = require("audio-extensions");
const videoExtensions = require("video-extensions");

import * as path from "path";

const REGEX_AMAZON_URL = /https?:\/\/(.*amazon\..*\/.*|.*amzn\..*\/.*|.*a\.co\/.*)/i;
export const isAmazonUrl = url => REGEX_AMAZON_URL.test(url);

const REGEX_YOUTUBE = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/g;
export const isYoutubeUrl = url => REGEX_YOUTUBE.test(url);

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

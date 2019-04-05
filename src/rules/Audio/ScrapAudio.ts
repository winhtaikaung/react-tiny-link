import { ReactTinyLinkType } from '../../ReactTinyLinkTypes';
const MusicLogo = require('../../assets/music.svg');

export const ScrapAudio = async url => {
  return {
    title: url.substring(url.lastIndexOf('/') + 1),
    description: url.substring(url.lastIndexOf('/') + 1),
    url: url,
    image: [MusicLogo],
    video: [],
    type: ReactTinyLinkType.TYPE_AUDIO,
  };
};

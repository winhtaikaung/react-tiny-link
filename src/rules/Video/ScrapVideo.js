import { TYPE_VIDEO } from '../index';
async function createThumbNail(url) {
  let video = document.createElement('video');
  let canvas = document.createElement('canvas');
  // video.width = 1024;
  // video.height = 768;
  let videoHeight = 0;
  let videoWidth = 0;
  video.setAttribute('src', url);
  video.load();
  
  video.muted = true;
  video.crossOrigin = 'Anonymous';

  video.addEventListener('loadedmetadata', () => {
    videoHeight = video.videoHeight ;
    videoWidth = video.videoWidth ;
    canvas.width = videoWidth/3;
    canvas.height = videoHeight/3;
    video.play();
  });

  video.addEventListener('playing', () => {
      setTimeout(() => {
        canvas.getContext('2d').drawImage(video, (videoWidth/2)/64, -(videoHeight/1.5)/9, videoWidth/2, videoHeight/1.5);
        video.pause();
      }, 3000);
  });
  
  return canvas
  // video.play(
}
export const ScrapVideo = async url => {
  
  console.log(url.substring(url.lastIndexOf('/') + 1))
  return {
    title: url.substring(url.lastIndexOf('/') + 1),
    description: url,
    image: [],
    video: [url],
    type: TYPE_VIDEO,
  };
};

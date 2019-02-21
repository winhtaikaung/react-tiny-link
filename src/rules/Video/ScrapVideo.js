import { TYPE_VIDEO } from '../index';
function createThumbNail(url) {
  let video = document.createElement('video');
  let canvas = document.createElement('canvas');
  video.width = 1024;
  video.height = 768;
  video.setAttribute('src', url);
  video.load();
  video.play();

  canvas.width = 1024;
  canvas.height = 768;
  
  setTimeout(()=>{
    canvas.getContext('2d').drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
  console.log(video.videoHeight);
  console.log(canvas.toDataURL("image/png"))
  },1000)
  // video.play(
  
}
export const ScrapVideo = async url => {
  createThumbNail(url);
  return {
    title: url.substring(url.lastIndexOf('/') + 1),
    description: url.substring(url.lastIndexOf('/') + 1),
    image: [],
    video: [url],
    type: TYPE_VIDEO,
  };
};

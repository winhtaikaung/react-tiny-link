import {TYPE_AUDIO} from '../index'


export const ScrapAudio = async (url)=>{
   
    return {
        title: url.substring(url.lastIndexOf('/') + 1),
        description: url.substring(url.lastIndexOf('/') + 1),
        url:url,
        image:[],
        video: [],
        type:TYPE_AUDIO
      }
}
import {TYPE_AUDIO} from '../index'
import Music from '../../assets/Music.svg'

export const ScrapAudio = async (url)=>{
   
    return {
        title: url.substring(url.lastIndexOf('/') + 1),
        description: url.substring(url.lastIndexOf('/') + 1),
        url:url,
        image:[Music],
        video: [],
        type:TYPE_AUDIO
      }
}
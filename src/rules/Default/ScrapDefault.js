import { TYPE_DEFAULT } from "..";

export default async ($,url)=>{
    return {
        title: $('title').text(),
        content: $("meta[name='description']").attr('content'),
        url: $("meta[property='og:url']").attr('content'),
        description: $("meta[name='description']").attr('content'),
        image: [$("meta[property='og:image']").attr('content')],
        type: TYPE_DEFAULT, // MIME Type
      }
      
}
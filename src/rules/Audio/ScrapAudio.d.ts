import { ReactTinyLinkType } from '../../ReactTinyLinkTypes';
export declare const ScrapAudio: (url: any, defaultMedia: any) => Promise<{
    title: any;
    description: any;
    url: any;
    image: any[];
    video: any[];
    type: ReactTinyLinkType;
}>;

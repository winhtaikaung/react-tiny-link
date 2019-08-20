import { ReactTinyLinkType } from '../../ReactTinyLinkTypes';
export declare const ScrapVideo: (url: any, defaultMedia: any) => Promise<{
    title: any;
    description: any;
    image: any[];
    video: any[];
    url: any;
    type: ReactTinyLinkType;
}>;

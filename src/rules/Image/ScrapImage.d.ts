import { ReactTinyLinkType } from '../../ReactTinyLinkTypes';
export declare const ScrapImage: (url: any, defaultMedia: any) => Promise<{
    title: any;
    description: any;
    url: any;
    video: any[];
    image: any[];
    type: ReactTinyLinkType;
}>;

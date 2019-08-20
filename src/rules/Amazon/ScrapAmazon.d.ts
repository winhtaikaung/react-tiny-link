import { ReactTinyLinkType } from '../../ReactTinyLinkTypes';
export declare const ScrapAmazon: (url: any, htmlDoc: any, defaultMedia: any) => Promise<{
    title: any;
    content: any;
    url: any;
    image: any[];
    description: any;
    video: any[];
    type: ReactTinyLinkType;
    publisher: string[];
}>;

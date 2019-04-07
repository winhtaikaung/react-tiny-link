import { ReactTinyLinkType } from '../../ReactTinyLinkTypes';
export declare const ScrapAmazon: (url: any, htmlDoc: any) => Promise<{
    title: any;
    content: any;
    url: any;
    image: string[];
    description: any;
    video: any[];
    type: ReactTinyLinkType;
    publisher: string[];
}>;

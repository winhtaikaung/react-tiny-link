import { ReactTinyLinkType } from '../../ReactTinyLinkTypes';
export declare const ScrapYoutube: (url: any, htmlDoc: any) => Promise<{
    title: any;
    url: any;
    description: any;
    type: ReactTinyLinkType;
    video: any[];
    image: string[];
}>;

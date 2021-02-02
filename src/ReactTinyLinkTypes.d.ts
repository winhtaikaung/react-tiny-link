export declare enum ReactTinyLinkType {
    TYPE_AMAZON = "TYPE_AMAZON",
    TYPE_YOUTUBE = "TYPE_YOUTUBE",
    TYPE_AUDIO = "TYPE_AUDIO",
    TYPE_VIDEO = "TYPE_VIDEO",
    TYPE_IMAGE = "TYPE_IMAGE",
    TYPE_DEFAULT = "TYPE_DEFAULT",
    TYPE_INSTAGRAM = "TYPE_INSTAGRAM",
    TYPE_BOARDGAMEGEEK = "TYPE_BOARDGAMEGEEK",
    TYPE_TWITTER = "TYPE_TWITTER"
}
export declare type CardSizeType = 'small' | 'large';
export interface IReactTinyLinkProps {
    cardSize?: CardSizeType;
    maxLine: number;
    minLine: number;
    url: string;
    requestHeaders?: Headers | string[][] | Record<string, string>;
    header?: string;
    onError?: (error: Error) => void;
    onSuccess?: (response: IReactTinyLinkData) => void;
    onClick?: (e: any, response?: IReactTinyLinkData) => void;
    description?: string;
    showGraphic?: boolean;
    autoPlay?: boolean;
    width?: string | number;
    noCache?: boolean;
    proxyUrl?: string;
    loadSecureUrl?: boolean;
    scraper?: (url: string, httpClient: any, defaultMedia: any) => Promise<{
        title: any;
        description: any;
        url: any;
        video: any[];
        image: any[];
        type: ReactTinyLinkType;
    }>;
    defaultMedia?: string;
}
export interface IReactTinyLinkData {
    description: string;
    image: string[];
    title: string;
    type: ReactTinyLinkType;
    video: string[];
    url: string;
}

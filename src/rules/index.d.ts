export declare const TYPE_AMAZON = "TYPE_AMAZON";
export declare const TYPE_YOUTUBE = "TYPE_YOUTUBE";
export declare const TYPE_AUDIO = "TYPE_AUDIO";
export declare const TYPE_VIDEO = "TYPE_VIDEO";
export declare const TYPE_IMAGE = "TYPE_IMAGE";
export declare const TYPE_DEFAULT = "TYPE_DEFAULT";
export declare const ScraperWraper: (url: any, httpClient: any) => Promise<{
    title: any;
    description: any;
    image: any[];
    video: any[];
    url: any;
    type: string;
}>;

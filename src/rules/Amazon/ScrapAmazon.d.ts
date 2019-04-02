export declare const ScrapAmazon: (url: any, htmlDoc: any) => Promise<{
    title: any;
    content: any;
    url: any;
    image: any[];
    description: any;
    video: any[];
    type: string;
    publisher: string[];
}>;

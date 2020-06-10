declare const _default: (url: string, httpClient: any, defaultMedia: string[]) => Promise<{
    title: any;
    content: string;
    url: string;
    description: any;
    video: any;
    image: any[];
    type: import("../ReactTinyLinkTypes").ReactTinyLinkType;
} | {
    title: any;
    url: any;
    description: any;
    type: import("../ReactTinyLinkTypes").ReactTinyLinkType;
    video: any[];
    image: any[];
}>;
export default _default;

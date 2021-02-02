import { IReactTinyLinkData } from './ReactTinyLinkTypes';
export declare const media: {
    mobile: (...args: any[]) => any;
    desktop: (...args: any[]) => any;
};
export declare const getHostname: (href: any) => string;
export declare const isLarge: (cardSize: any) => boolean;
export declare const isValidImageURL: (src: any) => boolean;
export declare const isValidVideoURL: (src: any) => boolean;
export declare const findFirstSecureUrl: (records: any, condition: any) => any;
/**
 * @returns {IReactTinyLinkData} with default values.
 *
 * @param url url to fetch
 * @param defaultMedia media assigned to both the image and the video
 */
export declare function defaultData(url: string, defaultMedia: string[]): IReactTinyLinkData;
/** does nothing. Just here to have a constance reference */
export declare function noop(): void;
/**
 * Wraps a promise to make it cancelable.
 *
 * from https://reactjs.org/blog/2015/12/16/ismounted-antipattern.html
 * defined by @istarkov at:
 * https://github.com/facebook/react/issues/5465#issuecomment-157888325
 */
export declare const makeCancelable: (promise: any) => {
    promise: Promise<unknown>;
    cancel(): void;
};

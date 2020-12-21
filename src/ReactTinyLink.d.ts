import * as React from 'react';
import { IReactTinyLinkProps } from './ReactTinyLinkTypes';
import { useScraper } from './useScraper';
export declare const useScrapper: typeof useScraper;
export declare const ScrapperWraper: (url: string, httpClient: any, defaultMedia: string[]) => Promise<{
    title: any;
    content: string;
    url: string;
    description: any;
    video: any;
    image: any[];
    type: import("./ReactTinyLinkTypes").ReactTinyLinkType;
} | {
    title: any;
    url: any;
    description: any;
    type: import("./ReactTinyLinkTypes").ReactTinyLinkType;
    video: any[];
    image: any[];
}>;
export declare const ReactTinyLink: React.FC<IReactTinyLinkProps>;

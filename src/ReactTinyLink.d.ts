import * as React from 'react';
import { IReactTinyLinkProps, IReactTinyLinkData } from './ReactTinyLinkTypes';
import { UseScraperConfig, ResponseState } from './useScraper';
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
export declare const useScrapper: (config: UseScraperConfig) => ResponseState<IReactTinyLinkData, Error>;
export declare const ReactTinyLink: React.FC<IReactTinyLinkProps>;

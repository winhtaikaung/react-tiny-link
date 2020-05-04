import * as React from 'react';
import { IReactTinyLinkProps } from './ReactTinyLinkTypes';
export declare const ScrapperWraper: (url: string, httpClient: any, defaultMedia: string[]) => Promise<{
    title: any;
    url: any;
    description: any;
    type: import("./ReactTinyLinkTypes").ReactTinyLinkType;
    video: any[];
    image: any[];
}>;
export declare const ReactTinyLink: React.FC<IReactTinyLinkProps>;

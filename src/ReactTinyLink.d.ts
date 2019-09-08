import * as React from 'react';
import { ReactTinyLinkType, IReactTinyLinkProps } from './ReactTinyLinkTypes';
export declare const ScrapperWraper: (url: string, httpClient: any, defaultMedia: string[]) => Promise<{
    title: any;
    url: any;
    description: any;
    type: ReactTinyLinkType;
    video: any[];
    image: any[];
}>;
export declare const ReactTinyLink: React.FC<IReactTinyLinkProps>;

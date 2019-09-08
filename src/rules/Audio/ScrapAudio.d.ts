import { ReactTinyLinkType } from '../../ReactTinyLinkTypes';
declare const _default: (url: string, defaultMedia: string[]) => Promise<{
    title: string;
    description: string;
    url: string;
    image: string[][];
    video: any[];
    type: ReactTinyLinkType;
}>;
export default _default;

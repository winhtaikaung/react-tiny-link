import { ReactTinyLinkType } from '../../ReactTinyLinkTypes';
declare const _default: (url: string, defaultMedia: string[]) => Promise<{
    title: string;
    description: string;
    url: string;
    video: any[];
    image: (string | string[])[];
    type: ReactTinyLinkType;
}>;
export default _default;

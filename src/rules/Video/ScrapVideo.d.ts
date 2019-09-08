import { ReactTinyLinkType } from '../../ReactTinyLinkTypes';
declare const _default: (url: string, defaultMedia: string[]) => Promise<{
    title: string;
    description: string;
    image: any[];
    video: (string | string[])[];
    url: string;
    type: ReactTinyLinkType;
}>;
export default _default;

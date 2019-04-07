export enum ReactTinyLinkType {
    TYPE_AMAZON = 'TYPE_AMAZON',
    TYPE_YOUTUBE = 'TYPE_YOUTUBE',
    TYPE_AUDIO = 'TYPE_AUDIO',
    TYPE_VIDEO = 'TYPE_VIDEO',
    TYPE_IMAGE = 'TYPE_IMAGE',
    TYPE_DEFAULT = 'TYPE_DEFAULT',
  }

export type CardSizeType = 'small' | 'large';

export interface IReactTinyLinkProps {
    cardSize: CardSizeType;
    maxLine: number;
    minLine: number;
    header: string;
    description: string;
    url: string;
    width: string | number;
    proxyUrl: string;
    showGraphic: boolean;
    autoPlay: boolean;
  }
  
  export interface IReactTinyLinkData {
    description: string;
    image: string[];
    title: string;
    type: ReactTinyLinkType;
    video: string[];
    url: string;
  }
  
  export interface IReactTinyLinkState {
    data: IReactTinyLinkData;
    loading: boolean;
  }
  
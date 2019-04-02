export declare const ScrapYoutube: (
  url: any,
  htmlDoc: any,
) => Promise<{
  title: any;
  url: any;
  description: any;
  type: string;
  video: any[];
  image: string[];
}>;

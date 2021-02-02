import { IReactTinyLinkData } from './ReactTinyLinkTypes';
/** current state of the fetch */
export interface IState<T, E> {
    /**
     * The respones to the request. Undefined if the request not done or returned
     * an error.
     */
    response: T | undefined;
    /** Loading status. `true` if loading, `false` otherwise. */
    loading: boolean;
    /**
     * Error status. Undefined if the request returned a valid response or is
     * loading.
     */
    error: E | undefined;
}
/** array composed of:
 * 1. The respones to the request. Undefined if the request not done or returned
 *    an error.
 * 2. The loading status. `true` if loading, `false` otherwise.
 * 3. Ther error status. Undefined if the request returned a valid response or is
 *    loading.
 */
export declare type ResponseState<T, E> = [T | undefined, boolean, E | undefined];
export declare type UseScraperConfig = {
    url: string;
    proxyUrl?: string;
    requestHeaders?: Headers | string[][] | Record<string, string>;
    /** default medias passed to the `ScraperWraper` */
    defaultMedias?: string[];
    /**
     * Permits to pass a default value. This will be the response's value
     * during the loading and in case of error.
     */
    defaultValue?: IReactTinyLinkData;
    /** disables cache */
    noCache?: boolean;
    /** Called when the fetch failed with the reason of the failure */
    onError?: (error: Error) => void;
    /** Called when the fetch succeeded with the resulting data */
    onSuccess?: (response: IReactTinyLinkData) => void;
};
export declare function useScraper({ url, proxyUrl, defaultMedias, defaultValue, noCache, onError, onSuccess, requestHeaders, }: UseScraperConfig): ResponseState<IReactTinyLinkData, Error>;
/** headers passed to the fetch request */

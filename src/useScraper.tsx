import { useState, useEffect } from 'react'

// Helpers
import ScraperWraper from './rules'
import { makeCancelable } from './utils'

// Types
import { IReactTinyLinkData } from './ReactTinyLinkTypes'
import { isInstagramUrl, isTwitterUrl } from './rules/utils'

/** current state of the fetch */
export interface IState<T, E> {
  /**
   * The respones to the request. Undefined if the request not done or returned
   * an error.
   */
  response: T | undefined

  /** Loading status. `true` if loading, `false` otherwise. */
  loading: boolean

  /**
   * Error status. Undefined if the request returned a valid response or is
   * loading.
   */
  error: E | undefined
}

/** array composed of:
 * 1. The respones to the request. Undefined if the request not done or returned
 *    an error.
 * 2. The loading status. `true` if loading, `false` otherwise.
 * 3. Ther error status. Undefined if the request returned a valid response or is
 *    loading.
 */
export type ResponseState<T, E> = [T | undefined, boolean, E | undefined]

export type UseScraperConfig = {
  url: string
  proxyUrl?: string
  requestHeaders?: Headers | string[][] | Record<string, string>
  /** default medias passed to the `ScraperWraper` */
  defaultMedias?: string[]
  /**
   * Permits to pass a default value. This will be the response's value
   * during the loading and in case of error.
   */
  defaultValue?: IReactTinyLinkData
  /** disables cache */
  noCache?: boolean
  // Hooks for the caller
  /** Called when the fetch failed with the reason of the failure */
  onError?: (error: Error) => void
  /** Called when the fetch succeeded with the resulting data */
  onSuccess?: (response: IReactTinyLinkData) => void
}

type CacheMap = Map<string, IReactTinyLinkData>

const cache: CacheMap = new Map()

export function useScraper({
  url,
  proxyUrl = 'https://cors-anywhere.herokuapp.com',
  defaultMedias = [],
  defaultValue,
  noCache,
  onError,
  onSuccess,
  requestHeaders,
}: UseScraperConfig): ResponseState<IReactTinyLinkData, Error> {
  // Alias to IState
  type State = IState<IReactTinyLinkData, Error>

  // Setup the state
  const [state, setState] = useState<State>({
    response: defaultValue,
    loading: true, // Avoid a re-render to set to true
    error: undefined,
  })

  /** Does the fetch on mount. Ensure the cleanup in case of premature unmounting */
  useEffect(() => {
    // Permit to control if should set the state. Avoiding a memory leak
    let isMounted: boolean = true

    // Wraps the `ScraperWraper` to manage the hook's state
    const doFetch = async (): Promise<IReactTinyLinkData> => {
      const finalStateUpdate: Partial<State> = { loading: false, error: undefined }
      let headers = requestHeaders

      try {
        // actual request to preview the link
        let urlToCall = proxyUrl ? `${proxyUrl}/${url}` : url
        if (isInstagramUrl(url)) {
          const modifiedInstaUrl = `${url}?__a=1&max_id=endcursor`
          urlToCall = modifiedInstaUrl
        } else if (isTwitterUrl(url)) {
          const modifiedInstaUrl = `https://publish.twitter.com/oembed?url=${url}`
          urlToCall = proxyUrl ? `${proxyUrl}/${modifiedInstaUrl}` : modifiedInstaUrl
        }

        let data
        if (!noCache && cache.has(urlToCall)) {
          data = cache.get(urlToCall)
        } else {
          const client = fetch(urlToCall, { headers })
          data = await ScraperWraper(url, client, defaultMedias)
          cache.set(urlToCall, data)
        }
        finalStateUpdate.response = data

        onSuccess && isMounted && onSuccess(data)
        return data
      } catch (err) {
        finalStateUpdate.error = err
        onError && isMounted && onError(err)

        return err
      } finally {
        isMounted && setState(old => ({ ...old, ...finalStateUpdate }))
      }
    }

    // Makes the request and wraps it so we can cancel it if needed
    const cancelable = makeCancelable(doFetch())

    // Returns a cleanup function which permits to avoid potential
    // memory leaks and unnecessary network when the component is
    // unmount.
    return () => {
      isMounted = false // Avoid all the state management
      cancelable.cancel() // Cancel the request
    }
  }, [url, proxyUrl, noCache]) // Put no dependecy, does the fetch only once on mount

  return [state.response, state.loading, state.error]
}

/** headers passed to the fetch request */

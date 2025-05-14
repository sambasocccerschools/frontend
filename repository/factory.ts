import type { FetchOptions, $Fetch } from 'ofetch'

class FetchFactory {
  private $fetch: $Fetch

  constructor(fetcher: $Fetch) {
    this.$fetch = fetcher
  }

  /**
   * The HTTP client is utilized to control the process of making API requests.
   * @param method the HTTP method (GET, POST, ...)
   * @param url the endpoint url
   * @param data the body data
   * @param fetchOptions fetch options
   * @returns
   */
  async call<T>(
    method: string,
    url: string,
    data?: object,
    fetchOptions?: FetchOptions<'json'>,
  ): Promise<T> {
    const config = useRuntimeConfig()
    try {
      return this.$fetch<T>(config.public.apiBaseUrl + url, {
        method,
        body: data,
        ...fetchOptions,
      })
    } catch (error) {
      console.log(error)
      return new Promise<T>((resolve) => {
        resolve
      })
    }
  }

  /**
   * The HTTP client is utilized to control the process of making API requests.
   * @param method the HTTP method (GET, POST, ...)
   * @param url the endpoint url
   * @param data the body data
   * @param fetchOptions fetch options
   * @returns
   */
  async callBlobs<T>(
    method: string,
    url: string,
    data?: object,
    fetchOptions?: FetchOptions<'json'>,
  ): Promise<T> {
    try {
      return this.$fetch<T>(url, {
        method,
        body: data,
        ...fetchOptions,
      })
    } catch (error) {
      console.log(error)
      return new Promise<T>((resolve) => {
        resolve
      })
    }
  }
}

export default FetchFactory

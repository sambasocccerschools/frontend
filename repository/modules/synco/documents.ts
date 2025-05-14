import type { FetchOptions } from 'ofetch'
import FetchFactory from '../../factory'
// import type {
//   IDocumentResponse,
//   IDocumentCreateUpdateItem,
//   ISingleDocumentResponse,
// } from '~/types/synco'

class DocumentsModule extends FetchFactory {
  private RESOURCE = '/document'

  async getAll(params?: Record<string, any>) {
    const token = useCookie('token')
    const fetchOptions: FetchOptions<'json'> = {
      headers: {
        Authorization: `${token.value}`,
      },
      params,
    }
    return this.call<any>(
      'GET',
      `${this.RESOURCE}/get_all`,
      undefined,
      fetchOptions,
    )
  }

  async getById(id: string) {
    const token = useCookie('token')
    const fetchOptions: FetchOptions<'json'> = {
      headers: {
        Authorization: `${token.value}`,
      },
    }
    return this.call<any>(
      'GET',
      `${this.RESOURCE}/get?id=${id}`,
      undefined,
      fetchOptions,
    )
  }

  private createFormData(data: any, file?: File) {
    const formData = new FormData()

    formData.append('fields', JSON.stringify(data))

    if (file) {
      formData.append('file', file, file.name)
    }
    for (const pair of formData.entries()) {
      console.log(pair[0], pair[1])
    }

    return formData
  }

  async create(data: any, file?: File) {
    const token = useCookie('token')
    const fetchOptions: FetchOptions<'json'> = {
      headers: {
        Authorization: `${token.value}`,
      },
    }
    const formData = this.createFormData(data, file)

    return this.call<any>(
      'POST',
      `${this.RESOURCE}/add`,
      formData,
      fetchOptions,
    )
  }

  async update(id: string, data: any, file?: File) {
    const token = useCookie('token')
    const fetchOptions: FetchOptions<'json'> = {
      headers: {
        Authorization: `${token.value}`,
      },
    }
    const formData = this.createFormData(data, file)
    formData.append('_method', 'PUT')

    return this.call<any>(
      'PUT',
      `${this.RESOURCE}/edit?id=${id}`,
      formData,
      fetchOptions,
    )
  }

  async delete(id: string) {
    const token = useCookie('token')
    const fetchOptions: FetchOptions<'json'> = {
      headers: {
        Authorization: `${token.value}`,
      },
    }
    return this.call<any>(
      'DELETE',
      `${this.RESOURCE}/delete?id=${id}`,
      undefined,
      fetchOptions,
    )
  }

  async getBlobs(url: string) {
    const token = useCookie('token')
    const fetchOptions: FetchOptions<'json'> = {
      headers: {
        Authorization: `${token.value}`,
      },
    }
    return this.callBlobs<Blob>('GET', `${url}`, undefined, fetchOptions)
  }
}

export default DocumentsModule

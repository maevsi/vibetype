import { IncomingMessage } from 'node:http'

import { CombinedError } from '@urql/core'
import Clipboard from 'clipboard'
import consola from 'consola'
import Swal from 'sweetalert2'
import { Ref } from 'vue'
import { LocationQueryValue } from 'vue-router'

import { REGEX_UUID } from './constants'
import type {
  ArrayElement,
  BackendError,
  UnionToIntersection,
} from '~/types/types'

export function append(path: string, pathToAppend: string): string {
  return path + (path.endsWith('/') ? '' : '/') + pathToAppend
}

export function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export function copyText(text: string) {
  return new Promise(function (resolve, reject) {
    const fakeElement = document.createElement('button')
    const clipboard = new Clipboard(fakeElement, {
      text: function () {
        return text
      },
      action: function () {
        return 'copy'
      },
      container: document.body,
    })
    clipboard.on('success', function (e) {
      clipboard.destroy()
      resolve(e)
    })
    clipboard.on('error', function (e) {
      clipboard.destroy()
      reject(e)
    })
    fakeElement.click()
  })
}

// export function getDeferredPromise<T>(then?: (value: any) => T): Promise<T> {
//   let res, rej

//   const promise: any = new Promise((resolve, reject) => {
//     res = resolve
//     rej = reject
//   })

//   promise.resolve = res
//   promise.reject = rej

//   if (then) {
//     promise.then((value: any) => {
//       then(value)
//     })
//   }

//   return promise
// }

export function getDomainTldPort(host: string) {
  const hostParts = host.split('.')

  if (hostParts.length <= 2) return host

  return `${hostParts[hostParts.length - 2]}.${hostParts[hostParts.length - 1]}`
}

export function getHost(req: IncomingMessage) {
  if (!req.headers.host) throw new Error('Host header is not given!')

  return req.headers.host
}

export const getApiData = <
  S,
  T extends {
    data: Ref<S>
    error: Ref<CombinedError | undefined>
    fetching: Ref<boolean>
  }
>(
  queries?: T[]
) => {
  const apiData = computed(() => ({
    data: (queries || []).reduce(
      (p, c) => ({ ...p, ...c.data.value }),
      {} as NonNullable<
        UnionToIntersection<NonNullable<ArrayElement<T[]>['data']['value']>>
      >
    ),
    errors: (queries || []).reduce(
      (p, c) => (c.error.value ? [...p, c.error.value] : p),
      [] as BackendError[]
    ),
    isFetching: (queries || []).reduce((p, c) => p || c.fetching.value, false),
  }))

  watch(
    () => apiData.value.errors,
    (current, previous) => {
      current
        .filter((error) => !previous.includes(error))
        .forEach((error) => consola.error(error))
    }
  )

  return apiData
}

export function getCombinedErrorMessages(
  errors: BackendError[],
  pgIds?: Record<string, string>
) {
  const errorMessages: string[] = []

  for (const combinedError of errors) {
    // const combinedError = error

    if (combinedError.networkError) {
      errorMessages.push(combinedError.message)
    }

    for (const graphqlError of combinedError.graphQLErrors) {
      if (
        graphqlError.originalError &&
        'errcode' in graphqlError.originalError
      ) {
        const translation =
          pgIds && pgIds[`postgres${graphqlError.originalError.errcode}`]

        if (translation) {
          errorMessages.push(translation)
        } else {
          errorMessages.push(graphqlError.message)
        }
      }
    }
  }

  return errorMessages
}

export function getQueryString(
  queryParametersObject: Record<string, any>
): string {
  return (
    '?' +
    Object.keys(queryParametersObject)
      .map((key) => {
        return (
          encodeURIComponent(key) +
          '=' +
          encodeURIComponent(queryParametersObject[key] as string)
        )
      })
      .join('&')
  )
}

export const isQueryIcFormatValid = (
  ic: LocationQueryValue | LocationQueryValue[]
) => ic && !Array.isArray(ic) && REGEX_UUID.test(ic)

export function xhrPromise(
  method: string,
  url: string,
  jwt: string
): Promise<any> {
  return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest()
    xhr.open(method, url)

    if (jwt) {
      xhr.setRequestHeader('Authorization', 'Bearer ' + jwt)
    }

    xhr.onload = function () {
      if (this.status >= 200 && this.status < 300) {
        resolve(xhr.response)
      } else {
        reject(new Error(`${this.status}\n${xhr.statusText}`))
      }
    }
    xhr.onerror = function () {
      reject(new Error(`${this.status}\n${xhr.statusText}`))
    }
    xhr.send()
  })
}

export function showToast({ title }: { title: string }) {
  return Swal.fire({
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    },
    icon: 'success',
    position: 'bottom',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    title,
    toast: true,
  })
}

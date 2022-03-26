/* eslint-disable */
export default class PricelistApi {
  static DEFAULT_API_URL = process.env.REACT_APP_FLASK_SERVER_ADDRESS || 'http://localhost:5000'
  static MOCK_API_URL = 'http://octos.free.beeceptor.com'

  /**
   * The URL of the api.
   */
  baseUrl

  constructor(url = PricelistApi.DEFAULT_API_URL) {
    this.baseUrl = url
  }

  makeRequest(method, url, data) {
    let requestUrl = this.baseUrl + url;
    return new Promise(function (resolve, reject) {
      let xhr = new XMLHttpRequest()
      xhr.open(method, requestUrl)
      xhr.onload = function () {
        if (this.status >= 200 && this.status < 300) {
          resolve(xhr.response)
        } else {
          reject({
            status: this.status,
            statusText: xhr.statusText,
          })
        }
      }
      xhr.onerror = function () {
        reject({
          status: this.status,
          statusText: xhr.statusText,
        })
      }
      xhr.send(data)
    })
  }
}

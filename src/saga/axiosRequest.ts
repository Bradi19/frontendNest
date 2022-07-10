/* eslint-disable @typescript-eslint/no-useless-constructor */
import axios, { AxiosPromise } from 'axios'
import path from 'path'
import { env } from 'process'

interface RequestMethods {
  post(): Promise<AxiosPromise>
  get(): Promise<AxiosPromise>
  put(): Promise<AxiosPromise>
  delete(): Promise<AxiosPromise>
  url: string
}
export class Axios implements RequestMethods {
  url: string
  constructor(url: string) {
    let strings: any = env.REACT_APP_API
    this.url = path.join(strings, url)
  }
  post(): any {
    return axios.post(this.url)
  }
  get(): any {
    return axios.get('/')
  }
  put(): any {
    return axios.put('/')
  }
  delete(): any {
    return axios.delete('/')
  }
}

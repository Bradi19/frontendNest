/* eslint-disable require-yield */
import { call, put } from 'redux-saga/effects'
import types from '../../types'
import { Axios } from '../axiosRequest'

export function* getBanners(action: any): any {
  try {
    const result = yield call(Axios.post())
    yield put<any>(types.banners.GET_BANNERS_SUCCESS, result)
  } catch (e) {}
}

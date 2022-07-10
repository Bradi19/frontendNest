import { all, fork, takeLatest } from 'redux-saga/effects'
import types from '../types'
import * as banners from './functions/banners'

function* watchOnLoad(): any {
  yield takeLatest(types.banners.GET_BANNERS, banners.getBanners)
}
export default function* eventTake() {
  yield all([fork(watchOnLoad)])
}

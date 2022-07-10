import { all, fork } from 'redux-saga/effects'
import eventTake from './eventTake'
export default function* rootRequest() {
  yield all([fork(eventTake)])
}

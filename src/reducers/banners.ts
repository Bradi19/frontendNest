/* eslint-disable import/no-anonymous-default-export */
import types from '../types'
const initialState = {
  banners: [],
}
export default (_state = initialState, action: any) => {
  switch (action.type) {
    case types.banners.GET_BANNERS_SUCCESS:
      break

    default:
      break
  }
}

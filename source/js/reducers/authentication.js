import { SIGN_IN_USER, SIGN_OUT_USER } from '../actions/app.js'

const initialState = {
  authenticated: false,
}

export default function authentication(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN_USER:
      return {
        ...state, authenticated: true,
      }
    case SIGN_OUT_USER:
      return {
        ...state, authenticated: false,
      }
    default:
      return state
  }
}

import { FETCH_POLLS_SUCCEEDED } from '../actions/app.js'

const initialState = {}

export default function fetchPolls(state = initialState, action) {
  switch (action.type) {
    case FETCH_POLLS_SUCCEEDED:
      const updatedState = Object.assign({}, initialState, action.payload)
      return updatedState
    default:
      return state
  }
}

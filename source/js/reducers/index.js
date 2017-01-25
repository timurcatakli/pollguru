import { combineReducers } from 'redux'
import { reducer as FormReducer } from 'redux-form'
import app from 'reducers/app'
import auth from 'reducers/authentication'
import fetchPolls from 'reducers/fetch-polls'

export default combineReducers({
  app,
  form: FormReducer,
  auth,
  polls: fetchPolls,
})

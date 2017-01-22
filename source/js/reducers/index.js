import { combineReducers } from 'redux'
import { reducer as FormReducer } from 'redux-form'
import app from 'reducers/app'
import authReducer from 'reducers/authentication'

export default combineReducers({
  app,
  form: FormReducer,
  auth: authReducer,
})

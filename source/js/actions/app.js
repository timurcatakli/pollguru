import api from 'api'
import { browserHistory } from 'react-router'
import Firebase from 'firebase'


export const TEST_ACTION = 'TEST_ACTION'

export const TEST_ASYNC_ACTION_START = 'TEST_ASYNC_ACTION_START'
export const TEST_ASYNC_ACTION_ERROR = 'TEST_ASYNC_ACTION_ERROR'
export const TEST_ASYNC_ACTION_SUCCESS = 'TEST_ASYNC_ACTION_SUCCESS'

export const SIGN_IN_USER = 'SIGN_IN_USER'
export const SIGN_OUT_USER = 'SIGN_OUT_USER'

export const AUTH_ERROR = 'AUTH_ERROR'
export const AUTH_USER = 'AUTH_USER'

const config = {
  apiKey: 'AIzaSyBCkC8OPJUvgsqYq6vOzaZ1PoW4i4cez2Q',
  authDomain: 'pollguru-1f421.firebaseapp.com',
  databaseURL: 'https://pollguru-1f421.firebaseio.com',
  storageBucket: 'pollguru-1f421.appspot.com',
  messagingSenderId: '20406606592',
}

Firebase.initializeApp(config)

export function signUpUser(credentials) {
  return function (dispatch) {
    Firebase.auth().createUserWithEmailAndPassword(credentials.email, credentials.password)
      .then(response => {
        dispatch(authUser())
        browserHistory.push('/')
      })
      .catch(error => {
        console.log(error)
        dispatch(authError(error))
      })
  }
}

export function signInUser(credentials) {
  return function (dispatch) {
    Firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(response => {
        console.log(response)
        dispatch(authUser())
        browserHistory.push('/')
      })
      .catch(error => {
        dispatch(authError(error))
      })
  }
}

// SignOut User Action
export function signOutUser() {
  browserHistory.push('/')
  return {
    type: SIGN_OUT_USER,
  }
}

export function authUser() {
  return {
    type: AUTH_USER,
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error,
  }
}

// ///////////////////////////////////////////////////////////////////////////

// Test action

export function testAction() {
  return {
    type: TEST_ACTION,
  }
}

// Async action example

function testAsyncStart() {
  return {
    type: TEST_ASYNC_ACTION_START,
  }
}

function testAsyncSuccess(data) {
  return {
    type: TEST_ASYNC_ACTION_SUCCESS,
    data,
  }
}

function testAsyncError(error) {
  return {
    type: TEST_ASYNC_ACTION_ERROR,
    error,
  }
}

export function testAsync() {
  return function (dispatch) {
    dispatch(testAsyncStart())

    api.testAsync()
      .then(data => dispatch(testAsyncSuccess(data)))
      .catch(error => dispatch(testAsyncError(error)))
  }
}

// Update

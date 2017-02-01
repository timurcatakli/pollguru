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

export const FETCH_POLLS_FAILED = 'FETCH_POLLS_FAILED'
export const FETCH_POLLS_SUCCEEDED = 'FETCH_POLLS_SUCCEEDED'

const config = {
  apiKey: 'AIzaSyBCkC8OPJUvgsqYq6vOzaZ1PoW4i4cez2Q',
  authDomain: 'pollguru-1f421.firebaseapp.com',
  databaseURL: 'https://pollguru-1f421.firebaseio.com',
  storageBucket: 'pollguru-1f421.appspot.com',
  messagingSenderId: '20406606592',
}

Firebase.initializeApp(config)

export function signUpUserAction(credentials) {
  return function (dispatch) {
    Firebase.auth().createUserWithEmailAndPassword(credentials.email, credentials.password)
      .then(response => {
        dispatch(authUserAction())
        browserHistory.push('/account')
      })
      .catch(error => {
        console.log(error)
        dispatch(authErrorAction(error))
      })
  }
}

export function signInUserAction(credentials) {
  return function (dispatch) {
    Firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(response => {
        dispatch(authUserAction(response))
        browserHistory.push('/account')
      })
      .catch(error => {
        dispatch(authErrorAction(error))
      })
  }
}

export function fetchPolls() {
  return function (dispatch) {
    Firebase.database().ref('/polls/').once('value')
      .then(response => {
        dispatch(fetchPollsAction(response.val()))
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export function fetchPollsAction(payload) {
  return {
    type: FETCH_POLLS_SUCCEEDED,
    payload,
  }
}

// SignOut User Action
export function signOutUser() {
  browserHistory.push('/')
  return {
    type: SIGN_OUT_USER,
  }
}

export function authUserAction(payload) {
  return {
    type: AUTH_USER,
    payload,
  }
}

export function authErrorAction(error) {
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

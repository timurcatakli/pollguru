import api from 'api'
import { browserHistory } from 'react-router'

export const TEST_ACTION = 'TEST_ACTION'

export const TEST_ASYNC_ACTION_START = 'TEST_ASYNC_ACTION_START'
export const TEST_ASYNC_ACTION_ERROR = 'TEST_ASYNC_ACTION_ERROR'
export const TEST_ASYNC_ACTION_SUCCESS = 'TEST_ASYNC_ACTION_SUCCESS'

export const SIGN_IN_USER = 'SIGN_IN_USER'
export const SIGN_OUT_USER = 'SIGN_OUT_USER'

// SignIn User Action
export function signInUser() {
  browserHistory.push('/subpage')
  return {
    type: SIGN_IN_USER,
  }
}

// SignOut User Action
export function signOutUser() {
  browserHistory.push('/')
  return {
    type: SIGN_OUT_USER,
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

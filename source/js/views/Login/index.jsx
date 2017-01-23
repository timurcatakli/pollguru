import React, { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { TextField } from 'redux-form-material-ui'
import RaisedButton from 'material-ui/RaisedButton'
import * as Actions from '../../actions/app'

const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  signInUser: PropTypes.func.isRequired,
}

const validate = values => {
  const errors = {}

  if (!values.email) {
    errors.email = 'Please enter an email.'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (!values.password) {
    errors.password = 'Please enter a password.'
  }

  return errors
}

export class Login extends Component {
  handleFormSubmit = (values) => {
    this.props.signInUser(values)
  }

  render() {
    return (
      <div className='page fullscreen grey lighten-4'>
        <div className='login-form z-depth-1'>
          <h1>Login</h1>
          <div className='input-field'>
            <Field
              name='email'
              id='login-form-email'
              hintText='Email'
              floatingLabelText='Enter your email'
              component={ TextField }
              fullWidth
            />
          </div>

          <div className='input-field'>
            <Field
              name='password'
              id='login-form-password'
              hintText='Password'
              floatingLabelText='Enter your password'
              type='password'
              component={ TextField }
              fullWidth
            />
          </div>
          <RaisedButton
            backgroundColor={ '#fdd835' }
            className='
              input-field
              waves-effect
              waves-light
              accent-color
              block
              m-b-20
              animated
              bouncein
              delay-2'
            fullWidth
            label='Sign in'
            onTouchTap={ this.props.handleSubmit(this.handleFormSubmit) }
          />
          <span>Don't have an account? <a className='primary-text' href='signup.html'>Sign Up</a></span>
        </div>
      </div>
    )
  }
}

Login.propTypes = propTypes
export default connect(null, Actions)(reduxForm({ form: 'login', validate })(Login))

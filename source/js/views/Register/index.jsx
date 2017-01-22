import React, { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import { TextField } from 'redux-form-material-ui'
import { connect } from 'react-redux'
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card'
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

  if (!values.passwordConfirmation) {
    errors.passwordConfirmation = 'Please enter a password confirmation.'
  }

  if (values.password !== values.passwordConfirmation) {
    errors.password = 'Passwords do not match'
  }

  return errors
}

export class Register extends Component {
  handleFormSubmit = (values) => {
    this.props.signInUser(values)
  }

  render() {
    return (
      <div>
        <div className='features anchor'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 col-md-offset-3 aligncenter'>
                <Card>
                  <CardTitle title='REGISTER' />
                  <CardText>
                    <form onSubmit={ this.props.handleSubmit(this.handleFormSubmit) }>
                      <Field
                        name='email'
                        id='login-form-email'
                        hintText='Email'
                        floatingLabelText='Enter your email'
                        component={ TextField }
                        // errorText={ this.props.errors.password }
                      />
                      <Field
                        name='password'
                        id='login-form-password'
                        hintText='Password'
                        floatingLabelText='Enter your password'
                        type='password'
                        component={ TextField }
                      />
                      <Field
                        name='passwordConfirmation'
                        id='login-form-password-confirmation'
                        hintText='Confirm Password'
                        floatingLabelText='Confirm your password'
                        type='password'
                        component={ TextField }
                      />
                    </form>
                  </CardText>
                  <CardActions>
                    <RaisedButton label='Sign in' onTouchTap={ this.props.handleSubmit(this.handleFormSubmit) } primary />
                  </CardActions>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Register.propTypes = propTypes
export default connect(null, Actions)(reduxForm({ form: 'register', validate })(Register))

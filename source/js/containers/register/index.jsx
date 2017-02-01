import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { TextField } from 'redux-form-material-ui'
import { browserHistory } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import * as Actions from '../../actions/app'
import PgDivider from '../../utils/PgDivider'

const propTypes = {
  handleSubmit: React.PropTypes.func.isRequired,
  signUpUser: React.PropTypes.func.isRequired,
  authenticationError: React.PropTypes.string,
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

export class Register extends React.Component {
  handleFormSubmit = (values) => {
    this.props.signUpUser(values)
  }

  renderAuthenticationError() {
    if (this.props.authenticationError) {
      return <div className='alert alert-danger'>{ this.props.authenticationError }</div>
    }
    return <div />
  }

  render() {
    return (
      <div className='container'>
        <Card>
          <CardTitle title='Sign Up' subtitle='Card subtitle' />
          <CardText>
            { this.renderAuthenticationError() }
            <Field
              name='email'
              id='login-form-email'
              hintText='Email'
              floatingLabelText='Enter your email'
              component={ TextField }
              fullWidth
            />

            <Field
              name='password'
              id='login-form-password'
              hintText='Password'
              floatingLabelText='Enter your password'
              type='password'
              component={ TextField }
              fullWidth
            />

            <Field
              name='passwordConfirmation'
              id='login-form-password-confirmation'
              hintText='Confirm Password'
              floatingLabelText='Confirm your password'
              type='password'
              component={ TextField }
              fullWidth
            />

            <PgDivider />

            <RaisedButton
              backgroundColor={ '#fdd835' }
              fullWidth
              label='Sign Up'
              onTouchTap={ this.props.handleSubmit(this.handleFormSubmit) }
            />

            <PgDivider />
          </CardText>
          <CardActions>
            <span>Have an account?</span>
            <FlatButton
              onTouchTap={ () => { browserHistory.push('/login') } }
              backgroundColor={ '#fdd835' }
              label='Login Here'
            />
          </CardActions>
        </Card>
        <PgDivider />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    authenticationError: state.auth.error,
  }
}
Register.propTypes = propTypes
export default connect(mapStateToProps, Actions)(reduxForm({ form: 'register', validate })(Register))

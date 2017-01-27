import React, { Component, PropTypes } from 'react'
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
  handleSubmit: PropTypes.func.isRequired,
  signInUserAction: PropTypes.func.isRequired,
  authenticationError: PropTypes.string,
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

export class LoginContainer extends Component {
  handleFormSubmit = (values) => {
    this.props.signInUserAction(values)
  }

  renderAuthenticationError() {
    if (this.props.authenticationError) {
      return <div className='pg-alert'>{ this.props.authenticationError }</div>
    }
    return <div />
  }

  render() {
    return (
      <div className='container'>
        <Card>
          <CardTitle title='Login' subtitle='Card subtitle' />
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
            <PgDivider />

            <RaisedButton
              backgroundColor={ '#fdd835' }
              fullWidth
              label='Sign in'
              onTouchTap={ this.props.handleSubmit(this.handleFormSubmit) }
            />

            <PgDivider />
          </CardText>
          <CardActions>
            <span>Don&#39;t have an account?</span>
            <FlatButton
              onTouchTap={ () => { browserHistory.push('/register') } }
              backgroundColor={ '#fdd835' }
              label='Sign Up Now!'
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

LoginContainer.propTypes = propTypes
export default connect(mapStateToProps, Actions)(reduxForm(
  {
    form: 'login',
    enableReinitialize: true,
    initialValues: {
      email: 'timurcatakli@gmail.com',
      password: '123456',
    },
    validate,
  }
)(LoginContainer))

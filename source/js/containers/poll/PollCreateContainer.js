import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { TextField } from 'redux-form-material-ui'
import RaisedButton from 'material-ui/RaisedButton'
import { Card, CardTitle, CardText } from 'material-ui/Card'
import * as Actions from '../../actions/app'
import PgDivider from '../../utils/PgDivider'
import PollResponsesContainer from './PollResponsesContainer'


const propTypes = {
  authenticationError: React.PropTypes.func,
  handleSubmit: React.PropTypes.func,
}

const validate = values => {
  const errors = {}

  if (!values.pollQuestion) {
    errors.pollQuestion = 'Please enter a value'
  }

  if (!values.pollResponses) {
    errors.pollResponses = 'Please enter a value'
  } else {
    values.pollResponses.map((response) => {
      if (!response.text) {
        return errors.pollResponses = 'Please enter a value'
      }
      return null
    })
  }
  return errors
}

export class PollCreateContainer extends React.Component {
  handleFormSubmit = (values) => {
    console.log('handleFormSubmit', values)
  }

  renderAuthenticationError() {
    const { authenticationError } = this.props
    if (authenticationError) {
      return <div className='pg-alert'>{ authenticationError }</div>
    }
    return <div />
  }

  render() {
    return (
      <div className='container'>
        <Card>
          <CardTitle title='Create a Poll' subtitle='Card subtitle' />
          <CardText>
            { this.renderAuthenticationError() }
            <Field
              name='pollQuestion'
              id='poll-form-question'
              hintText='Limit 144 chars'
              floatingLabelText='Poll Question'
              component={ TextField }
              fullWidth
            />

            <PgDivider />

            <Field
              name='pollResponses'
              component={ PollResponsesContainer }
            />

            <PgDivider />

            <RaisedButton
              backgroundColor={ '#fdd835' }
              fullWidth
              label='Submit'
              onTouchTap={ this.props.handleSubmit(this.handleFormSubmit) }
            />

            <PgDivider />
          </CardText>
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

PollCreateContainer.propTypes = propTypes
export default connect(mapStateToProps, Actions)(reduxForm(
  {
    form: 'poll',
    enableReinitialize: true,
    validate,
  }
)(PollCreateContainer))

import React, { Component, PropTypes } from 'react'
import { browserHistory } from 'react-router'
import { Card, CardTitle, CardText } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import PgDivider from '../../utils/PgDivider'

const propTypes = {
}

class PollSearchContainer extends Component {
  render() {
    return (
      <div className='container'>
        <Card>
          <CardTitle title='Vote For A Poll' subtitle='Card subtitle' />
          <CardText>
            <div className='grid'>
              <PgDivider />
              <div className='col-6-12 push-2-12'>
                <TextField
                  floatingLabelText='Floating Label Text'
                  fullWidth
                />
              </div>
              <div className='col-3-12'>
                <RaisedButton
                  backgroundColor={ '#fdd835' }
                  label='Sign in'
                />
              </div>
            </div>
          </CardText>
          <PgDivider />
          <PgDivider />
        </Card>
        <PgDivider />
      </div>
    )
  }
}

PollSearchContainer.propTypes = propTypes
export default PollSearchContainer

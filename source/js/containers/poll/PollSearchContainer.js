import React from 'react'
import { browserHistory } from 'react-router'
import { Card, CardTitle, CardText } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import PgDivider from '../../utils/PgDivider'

export default class PollsSearchContainer extends React.Component {
  constructor(props) {
    super(props)
    this.handleGo = this.handleGo.bind(this)
    this.onKeyPress = this.onKeyPress.bind(this)
  }

  onKeyPress(event) {
    const pollId = this.textInput.input.value
    if (event.charCode === 13) {
      event.preventDefault()
      browserHistory.push(`poll/${ pollId }`)
    }
  }

  handleGo() {
    const pollId = this.textInput.input.value
    if (pollId) {
      browserHistory.push(`poll/${ pollId }`)
    }
  }

  render() {
    return (
      <div className='container'>
        <Card>
          <CardTitle title='Join A Poll' subtitle='Card subtitle' />
          <CardText>
            <div className='grid pg-flex-baseline'>
              <div className='col-9-12'>
                <TextField
                  hintText='Hint Text'
                  floatingLabelText='Enter Poll Number & Hit Go'
                  ref={ (input) => { this.textInput = input } }
                  onKeyPress={ this.onKeyPress }
                  fullWidth
                />
              </div>
              <div className='col-3-12'>
                <RaisedButton
                  label='Go'
                  backgroundColor={ '#fdd835' }
                  onTouchTap={ this.handleGo }
                />
              </div>
            </div>
          </CardText>
        </Card>
        <PgDivider />
      </div>
    )
  }
}

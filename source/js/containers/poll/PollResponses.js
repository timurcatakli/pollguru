import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import { TextField } from 'redux-form-material-ui'
import PgDivider from '../../utils/PgDivider'

const propTypes = {
  index: React.PropTypes.number,
  onButtonClick: React.PropTypes.func,
  onValueChange: React.PropTypes.func,
  error: React.PropTypes.bool,
  response: React.PropTypes.object,
}

export default class PollResponses extends React.Component {
  handleValueChange = (e) => {
    this.props.onValueChange(e.target.value, this.props.index)
  }
  render() {
    const { index, error, response, onButtonClick } = this.props
    const buttonLabel = index === 0 ? 'Add' : 'Delete'
    const errorText = error && !response.text ? 'Please enter a value' : null
    return (
      <div>
        <div className='grid pg-flex-baseline'>
          <div className='col-9-12'>
            <TextField
              floatingLabelText='Poll Response'
              onChange={ this.handleValueChange }
              errorText={ errorText }
              fullWidth
            />
          </div>
          <div className='col-3-12'>
            <RaisedButton
              label={ buttonLabel }
              primary={ true }
              onTouchTap={ () => { onButtonClick(index) } }
            />
          </div>
        </div>
        <PgDivider />
      </div>
    )
  }
}

PollResponses.propTypes = propTypes

import React from 'react'
import PollResponses from './PollResponses'

const propTypes = {
  input: React.PropTypes.object,
  meta: React.PropTypes.object,
}

export default class PollResponsesContainer extends React.Component {

  componentWillMount() {
    const defaultResponses = [
      { 'text': null },
      { 'text': null },
      { 'text': null },
    ]
    this.props.input.onChange(defaultResponses)
  }

  handleButtonClick = (index) => {
    const { value, onChange } = this.props.input
    const updatedValue = [...value]

    if (index === 0) {
      updatedValue.push({ 'text': null })
    } else {
      updatedValue.splice(index, 1)
    }

    onChange(updatedValue)
  }

  handleValueChange = (response, index) => {
    const { value, onChange } = this.props.input
    const updatedValue = [...value]
    updatedValue[index] = { 'text': response }
    onChange(updatedValue)
  }

  render() {
    const errorOccured = this.props.meta.submitFailed === true
    const responsesArray = this.props.input.value || []
    return (
      <div>
        { responsesArray.map((response, index) => {
          return (
            <PollResponses
              key={ index }
              index={ index }
              response={ response }
              onButtonClick={ this.handleButtonClick }
              onValueChange={ this.handleValueChange }
              error={ errorOccured }
            />
          )
        })}
      </div>
    )
  }
}

PollResponsesContainer.propTypes = propTypes

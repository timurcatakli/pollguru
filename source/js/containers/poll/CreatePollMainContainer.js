import React from 'react'
import PollReady from './PollReady'
import PollCreateContainer from './PollCreateContainer'


const propTypes = {
}


export class CreatePollMainContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pollId: null,
    }
  }
  render() {
    if (this.state.pollId) {
      return <PollReady pollId={ this.state.pollId } />
    }
    return <PollCreateContainer />
  }
}

CreatePollMainContainer.propTypes = propTypes
export default CreatePollMainContainer

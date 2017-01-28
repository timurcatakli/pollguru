import React, { Component } from 'react'
import Firebase from 'firebase'
import ActionGrade from 'material-ui/svg-icons/action/grade'
import PgDivider from '../../utils/PgDivider'

const propTypes = {
  params: React.PropTypes.object.isRequired,
}

export default class PollContainer extends Component {
  constructor() {
    super()
    this.state = {
      pollQuestion: '',
      pollResponses: [],
      leftIconColor: 'red',
    }
  }

  componentDidMount() {
    const { pollId } = this.props.params
    const rootRef = Firebase.database().ref().child('polls')
    const pollRef = rootRef.child(pollId)
    pollRef.on('value', snap => {
      const pollObject = snap.val()
      const sumArray = []
      if (pollObject) {
        pollObject.responses.map((poll) => {
          return sumArray.push(poll.response_count)
        })
        const sum = sumArray.reduce((result, currentValue) => {
          return result + currentValue
        })
        this.setState({
          pollQuestion: pollObject.question || null,
          pollResponses: pollObject.responses || null,
          pollResponseCount: sum || null,
        })
      }
    })
  }

  render() {
    const { pollQuestion, pollResponseCount, pollResponses } = this.state

    if (pollQuestion) {
      return (
        <div className='container'>
          <div className='poll-question'>{pollQuestion}</div>
          <PgDivider />
          {pollResponses.map((response) => {
            return (
              <div key={ response.id } className='poll-container'>
                <div className='col-1-12'>
                  <ActionGrade color={ this.state.leftIconColor } />
                </div>
                <div className='col-6-12'>
                  <div className='poll-response'>{ response.text }</div>
                </div>
                <div className='col-6-12 poll-badge'>
                  <div
                    className='poll-vote-count'
                  >
                    <span className='poll-vote-count-label'>{ Math.round((response.response_count / pollResponseCount) * 100) }</span>
                    %
                  </div>
                  <div
                    className='poll-vote-count'
                    style={ { backgroundColor: '#8AA62F' } }
                  >
                    <span className='poll-vote-count-label'>{ response.response_count }&nbsp;</span>
                    / {pollResponseCount}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )
    }
    return (
      <div className='grid'>
        <PgDivider />
        <PgDivider />
        <PgDivider />
        <div className='col-6-12 push-3-12'><h1><strong>Oopps!</strong></h1><h2>The poll you are trying to reach does not exist</h2></div>
        <div className='col-3-12'>&nbsp;</div>
      </div>
    )
  }
}

PollContainer.propTypes = propTypes

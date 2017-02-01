import React from 'react'
import PgDivider from '../../utils/PgDivider'

const PollReady = (props) => {
  return (
    <div className='grid'>
      <PgDivider />
      <PgDivider />
      <PgDivider />
      <div className='col-6-12 push-3-12'>
        <h1>
          <strong>Congratulations! Your Poll is Ready...</strong>
        </h1>
        <h2>Your Poll Id is live at:  <strong>http://{ props.pollId }</strong></h2>
      </div>
      <div className='col-3-12'>&nbsp;</div>
    </div>
  )
}

export default PollReady

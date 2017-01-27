import React, { Component } from 'react'

export default class NotFound extends Component {
  render() {
    return (
      <div className='container'>
        <div className='grid'>
          <div className='col-1-1' style={ { textAlign: 'center', marginTop: 40 } }>
            <div className='content'>
              404
            </div>
          </div>
        </div>

      </div>
    )
  }
}

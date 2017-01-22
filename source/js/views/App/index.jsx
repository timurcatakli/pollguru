import React, { Component, PropTypes } from 'react';
import MenuContainer from 'components/Global/MenuContainer'

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object,
  }


  render() {
    const { children } = this.props
    return (
      <div className='App'>
        <MenuContainer />
        <div className='Page'>
          { children }
        </div>
      </div>
    )
  }
}

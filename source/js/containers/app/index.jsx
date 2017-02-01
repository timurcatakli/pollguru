import React from 'react'
import MenuContainer from 'components/Global/MenuContainer'

export default class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.object,
  }


  render() {
    const { children } = this.props
    return (
      <div>
        <MenuContainer />
        { children }
      </div>
    )
  }
}

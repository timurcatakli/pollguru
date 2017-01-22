import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import { browserHistory } from 'react-router'
import Popover from 'material-ui/Popover'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import * as Actions from '../../actions/app'

const propTypes = {
  signOutUser: PropTypes.func,
  authenticated: PropTypes.bool,
}


export class MenuContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      popoverOpen: false,
    }
  }

  handleSignout() {
    this.props.signOutUser()
  }

  handleLeftIconButtonTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault()

    this.setState({
      popoverOpen: true,
      popoverAnchorEl: event.currentTarget,
    })
  }

  handleRequestClose = () => {
    this.setState({
      popoverOpen: false,
    })
  }

  renderAuthLinks() {
    if (this.props.authenticated) {
      return [
        <MenuItem
          key={ 1 }
          primaryText='Sign Out'
          onTouchTap={ () => this.handleSignout() }
        />,
      ]
    }
    return [
      <MenuItem
        key={ 1 }
        primaryText='Login'
        onTouchTap={ () => {
          browserHistory.push('/login')
          this.handleRequestClose()
        } }
      />,
      <MenuItem
        key={ 2 }
        primaryText='Register'
        onTouchTap={ () => {
          browserHistory.push('/register')
          this.handleRequestClose()
        } }
      />,
    ]
  }

  renderLoginLink() {
    if (this.props.authenticated) {
      return 'Sign Out'
    }
    return 'Login'
  }

  render() {
    return (
      <div>
        <AppBar
          title='POLL-GURU'
          iconElementRight={ <FlatButton label={ this.renderLoginLink() } /> }
          onLeftIconButtonTouchTap={ this.handleLeftIconButtonTouchTap }
        />

        <Popover
          open={ this.state.popoverOpen }
          anchorEl={ this.state.popoverAnchorEl }
          anchorOrigin={ { horizontal: 'left', vertical: 'bottom' } }
          targetOrigin={ { horizontal: 'left', vertical: 'top' } }
          onRequestClose={ this.handleRequestClose }
        >
          <Menu>
            <MenuItem
              primaryText='Homepage'
              onTouchTap={ () => {
                browserHistory.push('/')
                this.handleRequestClose()
              } }
            />
            <MenuItem
              primaryText='Subpage'
              onTouchTap={ () => {
                browserHistory.push('/subpage')
                this.handleRequestClose()
              } }
            />
            {this.renderAuthLinks()}
          </Menu>
        </Popover>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
  }
}

MenuContainer.propTypes = propTypes
export default connect(mapStateToProps, Actions)(MenuContainer)

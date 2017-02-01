import React from 'react'
import { connect } from 'react-redux'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import { browserHistory } from 'react-router'
import Popover from 'material-ui/Popover'
import IconButton from 'material-ui/IconButton'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import HomeIcon from 'material-ui/svg-icons/action/home'
import PollIcon from 'material-ui/svg-icons/social/poll'
import PersonIcon from 'material-ui/svg-icons/social/person'
import FingerprintIcon from 'material-ui/svg-icons/action/fingerprint'
import AccountCircleIcon from 'material-ui/svg-icons/action/account-circle'
import ContentLink from 'material-ui/svg-icons/content/link'
import Divider from 'material-ui/Divider'
import Download from 'material-ui/svg-icons/file/file-download'
import * as Actions from '../../actions/app'

const propTypes = {
  signOutUser: React.PropTypes.func,
  authenticated: React.PropTypes.bool,
}


export class MenuContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { popoverOpen: false }
  }

  handleSignout() {
    this.props.signOutUser()
    this.state = { popoverOpen: false }
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
          key={ 0 }
          primaryText='Account'
          leftIcon={ <PersonIcon /> }
          onTouchTap={ () => {
            browserHistory.push('/account')
            this.handleRequestClose()
          } }
        />,
        <Divider key={ 1 } />,
        <MenuItem
          key={ 2 }
          primaryText='Sign Out'
          leftIcon={ <Download /> }
          onTouchTap={ () => this.handleSignout() }
        />,
      ]
    }
    return [
      <MenuItem
        key={ 1 }
        primaryText='Login'
        leftIcon={ <FingerprintIcon /> }
        onTouchTap={ () => {
          browserHistory.push('/login')
          this.handleRequestClose()
        } }
      />,
      <Divider key={ 2 } />,
      <MenuItem
        key={ 3 }
        primaryText='Sign Up'
        leftIcon={ <AccountCircleIcon /> }
        onTouchTap={ () => {
          browserHistory.push('/register')
          this.handleRequestClose()
        } }
      />,
    ]
  }

  renderLoginLink() {
    if (this.props.authenticated) {
      return (
        <IconButton tooltip='Account Details'>
          <PersonIcon />
        </IconButton>
      )
    }
    return (
      <FlatButton
        label={ 'Login' }
        onTouchTap={ () => {
          browserHistory.push('/login')
        } }
      />
    )
  }

  render() {
    return (
      <div className='material-menu'>
        <AppBar
          title='pollguru'
          iconElementRight={ this.renderLoginLink() }
          onLeftIconButtonTouchTap={ this.handleLeftIconButtonTouchTap }
        />
        <Popover
          open={ this.state.popoverOpen }
          anchorEl={ this.state.popoverAnchorEl }
          anchorOrigin={ { horizontal: 'left', vertical: 'bottom' } }
          targetOrigin={ { horizontal: 'left', vertical: 'top' } }
          onRequestClose={ this.handleRequestClose }
        >
          <Menu
            style={ { fontWeight: 200 } }
            autoWidth={ true }
          >
            <MenuItem
              primaryText='Home'
              leftIcon={ <HomeIcon /> }
              onTouchTap={ () => {
                browserHistory.push('/')
                this.handleRequestClose()
              } }
            />
            <Divider />
            <MenuItem
              primaryText='Create a Poll'
              leftIcon={ <PollIcon /> }
              onTouchTap={ () => {
                browserHistory.push('/poll/create')
                this.handleRequestClose()
              } }
            />
            <Divider />
            <MenuItem
              primaryText='Join A Poll'
              leftIcon={ <PollIcon /> }
              onTouchTap={ () => {
                browserHistory.push('/poll')
                this.handleRequestClose()
              } }
            />
            <Divider />
            <MenuItem
              primaryText='Subpage'
              leftIcon={ <ContentLink /> }
              onTouchTap={ () => {
                browserHistory.push('/subpage')
                this.handleRequestClose()
              } }
            />
            <Divider />
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

import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import { IndexLink, Link } from 'react-router'
import { routeCodes } from '../../routes'
import RaisedButton from 'material-ui/RaisedButton'
import Popover from 'material-ui/Popover'
import Menu2 from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'

export default class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  }

  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault()

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    })
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    })
  }

  render() {
    return (
      <div>
        <AppBar
          title='POLL-GURU'
          iconElementRight={ <FlatButton label='Save' /> }
          onLeftIconButtonTouchTap={ this.handleTouchTap }
        />

        <Popover
          open={ this.state.open }
          anchorEl={ this.state.anchorEl }
          anchorOrigin={ { horizontal: 'left', vertical: 'bottom' } }
          targetOrigin={ { horizontal: 'left', vertical: 'top' } }
          onRequestClose={ this.handleRequestClose }
        >
          <Menu2>
            <MenuItem primaryText='Refresh' />
            <MenuItem primaryText='Help &amp; feedback' />
            <MenuItem primaryText='Settings' />
            <MenuItem primaryText='Sign out' />
          </Menu2>
        </Popover>
      </div>
      // <div className='navigation'>
      //   <div className='container'>
      //     <div className='row'>
      //       <div className='col-md-12 clearfix'>
      //         <div className='logo floatleft'>
      //           <a href='/'><img src='images/logo.png' alt='Poll Guru' /></a>
      //         </div>
      //         <div className='menu floatright' role='navigation'>
      //           <ul className='clearfix'>
      //             <li><IndexLink to={ routeCodes.DASHBOARD }>Dashboard</IndexLink></li>
      //             <li><Link to={ routeCodes.ABOUT }>About</Link></li>
      //             <li><Link to={ routeCodes.SUBPAGE }>Subpage</Link></li>
      //             <li><Link to='404'>404</Link></li>
      //             <li><Link to='login'>Login</Link></li>
      //             <li><Link to='register'>Register</Link></li>
      //           </ul>
      //         </div>
      //         <div className='toggle-nav-wrapper floatright'>
      //           <button className='toggle-nav'><i className='fa fa-bars' /></button>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    )
  }
}

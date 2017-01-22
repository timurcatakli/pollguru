import React, { Component } from 'react'
import { connect } from 'react-redux'
import { IndexLink, Link } from 'react-router'
import { routeCodes } from '../../routes'
import * as Actions from '../../actions/app'

export class Menu extends Component {
  handleSignout() {
    this.props.signOutUser()
  }

  renderAuthLinks() {
    if (this.props.authenticated) {
      return [
        <li key={ 1 }><a className='nav-link' href='#' onClick={ () => this.handleSignout() }>Sign Out</a></li>
      ]
    }
    return [
      <li key={ 1 }><Link to={ routeCodes.LOGIN }>Login</Link></li>,
      <li key={ 2 }><Link to={ routeCodes.REGISTER }>Register</Link></li>
    ]
  }

  render() {
    return (
      <div className='navigation'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 clearfix'>
              <div className='logo floatleft'>
                <a href='/'><img src='images/logo.png' alt='Poll Guru' /></a>
              </div>
              <div className='menu floatright' role='navigation'>
                <ul className='clearfix'>
                  <li><IndexLink to={ routeCodes.DASHBOARD }>Dashboard</IndexLink></li>
                  <li><Link to={ routeCodes.ABOUT }>About</Link></li>
                  <li><Link to={ routeCodes.SUBPAGE }>Subpage</Link></li>
                  <li><Link to='404'>404</Link></li>
                  {this.renderAuthLinks()}
                </ul>
              </div>
              <div className='toggle-nav-wrapper floatright'>
                <button className='toggle-nav'><i className='fa fa-bars' /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps, Actions)(Menu)

import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';
import { routeCodes } from '../../routes';

export default class Menu extends Component {

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
                </ul>
              </div>
              <div className='toggle-nav-wrapper floatright'>
                <button className='toggle-nav'><i className='fa fa-bars' /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

import React from 'react'
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import ContentAdd from 'material-ui/svg-icons/content/add'
import RaisedButton from 'material-ui/RaisedButton'
import PgDivider from '../../utils/PgDivider'

export default class DashboardContainer extends React.Component {
  render() {
    return (
      <div style={ { backgroundColor: '#3b78e7' } }>
        <div className='home-container pg-flex-baseline'>
          <div className='col-6-12'>
            <h1>Meet your new inbox!</h1>
            <p>
              Built on everything we learned from Gmail,
              Inbox is a fresh start that goes beyond email
              to help you get back to what matters.
            </p>
          </div>
          <div className='col-6-12'>
            <img src='https://www.google.com/inbox/assets/images/intro/intro-product_2x.png' />
          </div>
        </div>
      </div>
    )
  }
}

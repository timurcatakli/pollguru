import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card'

export default class Register extends Component {
  render() {
    return (
      <div>
        <div className='features anchor'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 col-md-offset-3 aligncenter'>
                <Card>
                  <CardTitle title='REGISTER' />
                  <CardText>
                    <TextField
                      hintText='Enter your email'
                      floatingLabelText='Email'
                    />
                    <br />
                    <TextField
                      hintText='Enter your password'
                      floatingLabelText='Password'
                    />
                    <br />
                    <TextField
                      hintText='Repeat your password'
                      floatingLabelText='Password Confirmation'
                    />
                  </CardText>
                  <CardActions>
                    <RaisedButton label='Sign In' primary />
                  </CardActions>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

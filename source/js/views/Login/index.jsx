import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card'

export class Login extends Component {
  render() {
    return (
      <div>
        <div className='features anchor'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 col-md-offset-3 aligncenter'>
                <Card>
                  <CardTitle title='LOGIN' />
                  <CardText>
                    <form>
                      <TextField
                        hintText='Hint Text'
                        floatingLabelText='Floating Label Text'
                      />
                      <br />
                      <TextField
                        hintText='Hint Text'
                        floatingLabelText='Floating Label Text'
                      />
                    </form>
                  </CardText>
                  <CardActions>
                    <RaisedButton label='Primary' primary />
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

export default reduxForm({ form: 'login' })(Login)

import React, { Component } from 'react'
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import ContentAdd from 'material-ui/svg-icons/content/add'
import RaisedButton from 'material-ui/RaisedButton'
import PgDivider from '../../utils/PgDivider'

export default class AccountContainer extends Component {
  render() {
    return (
      <div className='container'>
        <h1 className='underline'>H1 Sample Title Goes Here</h1>
        <h2 className='underline'>H1 Sample Title Goes Here</h2>
        <h3 className='underline'>H1 Sample Title Goes Here</h3>
        <h4 className='underline'>H1 Sample Title Goes Here</h4>
        <h5 className='underline'>H1 Sample Title Goes Here</h5>
        <PgDivider />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.

        <PgDivider />

        <Card>
          <CardTitle title='Card title' subtitle='Card subtitle' />
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.

            <PgDivider />

            <TextField
              hintText='Hint Text'
              floatingLabelText='Floating Label Text'
              fullWidth
            />

            <PgDivider />

            <div className='grid pg-flex-baseline'>
              <div className='col-9-12'>
                <TextField
                  hintText='Hint Text'
                  floatingLabelText='Floating Label Text'
                  fullWidth
                />
              </div>
              <div className='col-3-12'>
                <RaisedButton label='Primary' primary={ true } />
              </div>
            </div>

            <PgDivider />

            <div className='grid pg-flex-end'>
              <div className='col-1-12'>
                <ContentAdd />
              </div>
              <div className='col-11-12'>
                <TextField
                  hintText='Hint Text'
                  floatingLabelText='Floating Label Text'
                  fullWidth
                />
              </div>
            </div>

            <PgDivider />
          </CardText>
          <CardActions>
            <FlatButton label='Action1' />
            <FlatButton label='Action2' />
          </CardActions>
        </Card>

        <PgDivider />

        <div className='grid'>
          <div className='col-1-3'>
            <div className='content'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            </div>
          </div>
          <div className='col-1-3'>
            <div className='content'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            </div>
          </div>
          <div className='col-1-3'>
            <div className='content'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            </div>
          </div>
        </div>

        <PgDivider />
        <PgDivider />
        <PgDivider />
      </div>
    )
  }
}

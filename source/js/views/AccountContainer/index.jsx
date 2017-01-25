import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card'
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'
import FlatButton from 'material-ui/FlatButton'
import * as Actions from '../../actions/app'
import PgDivider from '../../utils/PgDivider'

const propTypes = {
  fetchPolls: PropTypes.func,
}

const styles = {
  propContainer: {
    width: 200,
    overflow: 'hidden',
    margin: '20px auto 0',
  },
  propToggleHeader: {
    margin: '20px auto 10px',
  },
}

const tableData = [
  {
    name: 'John SmithJohn SmithJohn SmithJohn SmithJohn Smith',
    status: 'Employed',
  },
  {
    name: 'Randal White',
    status: 'Unemployed',
  },
  {
    name: 'Stephanie Sanders',
    status: 'Employed',
  },
  {
    name: 'Steve Brown',
    status: 'Employed',
  },
  {
    name: 'Joyce Whitten',
    status: 'Employed',
  },
  {
    name: 'Samuel Roberts',
    status: 'Employed',
  },
  {
    name: 'Adam Moore',
    status: 'Employed',
  },
]

export class AccountContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: false,
      showRowHover: false,
      selectable: true,
      multiSelectable: true,
      enableSelectAll: true,
      deselectOnClickaway: true,
      showCheckboxes: true,
      height: '300px',
    }
  }

  componentWillMount() {
    this.props.fetchPolls()
  }

  render() {
    const { polls } = this.props
    return (
      <div className='container'>
        <Card>
          <CardTitle title='Account Info' subtitle='Card subtitle' />
          <CardText>
            <ul>
              <li>Account Email Address</li>
              <li>Email Verification</li>
              <li>List of polls</li>
              <li>Create a poll action</li>
              <li>Contact Support</li>
            </ul>
            <PgDivider />

            <Table
              fixedHeader={ this.state.fixedHeader }
              selectable={ this.state.selectable }
              multiSelectable={ this.state.multiSelectable }
            >
              <TableHeader
                displaySelectAll={ this.state.showCheckboxes }
                adjustForCheckbox={ this.state.showCheckboxes }
                enableSelectAll={ this.state.enableSelectAll }
              >
                <TableRow>
                  <TableHeaderColumn
                    colSpan='2'
                    tooltip='Your Polls'
                    style={ { textAlign: 'center' } }
                  >
                    Your Polls
                  </TableHeaderColumn>
                </TableRow>
                <TableRow>
                  <TableHeaderColumn tooltip='The Name'>Name</TableHeaderColumn>
                  <TableHeaderColumn tooltip='The Status'>Status</TableHeaderColumn>
                  <TableHeaderColumn tooltip='The Status'>Status</TableHeaderColumn>
                  <TableHeaderColumn tooltip='The Status'>Status</TableHeaderColumn>
                  <TableHeaderColumn tooltip='The Status'>Status</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody
                displayRowCheckbox={ this.state.showCheckboxes }
                deselectOnClickaway={ this.state.deselectOnClickaway }
                showRowHover={ this.state.showRowHover }
                stripedRows={ this.state.stripedRows }
              >
                {Object.keys(polls).map((row, index) => {
                  let responseCount = 0
                  polls[row].responses.map((response) => {
                    console.log(response)
                    responseCount += response.response_count
                  })
                  return (
                    <TableRow key={ index }>
                      <TableRowColumn>{ polls[row].question }</TableRowColumn>
                      <TableRowColumn>{ responseCount }</TableRowColumn>
                      <TableRowColumn>{ polls[row].active ? 'True' : 'False' }</TableRowColumn>
                      <TableRowColumn>{ polls[row].created_date }</TableRowColumn>
                      <TableRowColumn>{ polls[row].require_authentication ? 'True' : 'False' }</TableRowColumn>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>

          </CardText>
          <CardActions>
            <FlatButton label='Action1' />
            <FlatButton label='Action2' />
          </CardActions>
        </Card>
        <PgDivider />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    polls: state.polls,
  }
}

AccountContainer.propTypes = propTypes
export default connect(mapStateToProps, Actions)(AccountContainer)

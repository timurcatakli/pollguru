import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Card, CardTitle, CardText } from 'material-ui/Card'
import { List, ListItem } from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Avatar from 'material-ui/Avatar'
import { yellow600 } from 'material-ui/styles/colors'
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart'
import * as Actions from '../../actions/app'
import PgDivider from '../../utils/PgDivider'

const propTypes = {
  fetchPolls: PropTypes.func,
  polls: React.PropTypes.object,
}

class AccountContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: false,
      showRowHover: false,
      selectable: true,
      multiSelectable: false,
      enableSelectAll: true,
      deselectOnClickaway: true,
      showCheckboxes: false,
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

            <List>
              <h2>Polls</h2>
              {Object.keys(polls).map((row, index) => {
                const responseCount = polls[row].responses.map((item) => {
                  return item.response_count
                })

                const totalResponseCount = responseCount.reduce((prev, curr) => {
                  return prev + curr
                })

                return (
                  <div key={ index }>
                    <ListItem
                      key={ index }
                      leftAvatar={
                        <Avatar icon={ <EditorInsertChart /> } backgroundColor={ yellow600 } />
                      }
                      primaryText={ polls[row].question }
                      secondaryText={ `# of Responses: ${ totalResponseCount }` }
                      onTouchTap={ () => { console.log('List Item') } }
                    />
                    <Divider />
                  </div>
                )
              })}
            </List>
          </CardText>
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

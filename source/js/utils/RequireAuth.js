import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

const propTypes = {
  authenticated: PropTypes.bool.isRequired,
}

export default function (WrappedComponent) {
  class Auth extends React.Component {
    componentWillMount() {
      if (!this.props.authenticated) {
        browserHistory.push('/login')
      }
    }

    render() {
      return <WrappedComponent { ...this.props } />
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated }
  }
  Auth.propTypes = propTypes
  return connect(mapStateToProps)(Auth)
}

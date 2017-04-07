import React, { Component } from 'react'
import routes from '../routes'
import { Router } from 'react-router'
import '../../styles/normalize.scss'
import '../../styles/app.scss'


export default class Root extends Component {
  render() {
    const { history } = this.props;
    return (
      <Router history={history} routes={routes} />
    )
  }
}

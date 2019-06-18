import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/header'
import GLView from '../components/gl-view'
import '../css/index.scss'

export default class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.func.isRequired
  }

  render() {
    let route = this.props.location.pathname

    return (
      <main className={route === '/' ? 'home' : 'not-home'}>
        <Header breadcrumb={route === '/' ? '' : route} />

        <GLView zoom={1} />

        {this.props.children()}
      </main>
    )
  }
}

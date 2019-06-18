import React, { Component } from 'react'
import Link from 'gatsby-link'
import { getBreadCrumb } from '../utils/blog'
import cx from 'classnames'

export default class Header extends Component {
  renderBackButton(breadcrumb) {
    let home = '/'

    return (
      <Link to={home}>
        <i className="fa fa-chevron-left" aria-hidden="true" />
        <i className="fa fa-chevron-left" aria-hidden="true" />
      </Link>
    )
  }

  render() {
    let { breadcrumb } = this.props
    let breadcrumbDisplay = getBreadCrumb(breadcrumb)
    let headerText = 'KareKod Robotik'
    let isHome = breadcrumb === ''
    let headerStyle = cx({
      'text-center': isHome
    })

    return (
      <header id="header">
        <div className={'logo fade ' + (breadcrumb ? '' : 'justify-center')}>
          <div className="breadcrumb">
            <strong className="fade">
              {breadcrumb ? this.renderBackButton(breadcrumb) : null}
            </strong>
          </div>

          <div className={headerStyle}>
            <h1>
              <Link to="/">
                <strong>{headerText}</strong>
              </Link>
            </h1>
          </div>
        </div>
      </header>
    )
  }
}

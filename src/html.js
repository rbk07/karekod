import React from 'react'
import PropTypes from 'prop-types'

const BUILD_TIME = new Date().getTime()

export default class HTML extends React.Component {
  static propTypes = {
    body: PropTypes.string
  }

  render() {
    let css
    if (process.env.NODE_ENV === 'production') {
      css = (
        <style
          dangerouslySetInnerHTML={{
            __html: require('!raw!../public/styles.css')
          }}
        />
      )
    }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, shrink-to-fit=0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0"
          />
          <meta
            name="description"
            content="Hi, I'm Prayash. I play guitar and write code that draws things."
          />
          <meta name="apple-mobile-web-app-capable" content="yes" />

          <meta name="robots" content="index, follow" />
          <meta name="author" content="Prayash Thapa" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@_prayash" />

          <meta property="fb:app_id" content="532441146961582" />
          <meta property="og:url" content={`http://prayash.io`} />
          <meta property="og:site_name" content="prayash thapa" />

          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link rel="preconnect" href="https://www.youtube.com" />
          <link rel="preconnect" href="https://i.ytimg.com" />
          <link rel="preconnect" href="https://i9.ytimg.com" />
          <link rel="preconnect" href="https://s.ytimg.com" />

          {this.props.headComponents}
          {css}
        </head>
        <body id="container">
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />

          {this.props.postBodyComponents}

          <script async src="https://use.fontawesome.com/8d22a2b20b.js" />
          <script
            async
            dangerouslySetInnerHTML={{
              __html:
                "(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m) })(window,document,'script','https://www.google-analytics.com/analytics.js','ga'); ga('create', 'UA-59088313-1', 'auto'); ga('send', 'pageview');"
            }}
          />
        </body>
      </html>
    )
  }
}

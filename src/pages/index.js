import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Emblem from '../components/emblem'

export default ({ data }) => {
  let indexData = data.allContentJson.edges[0].node.index
  let { title } = indexData

  return (
    <section>
      <Helmet title={title} />
      <Emblem />
    </section>
  )
}

export const pageQuery = graphql`
  query indexQuery {
    allContentJson {
      edges {
        node {
          index {
            title
            subtitle
          }
        }
      }
    }
  }
`

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import '../css/portfolio.scss'

export default ({ data }) => {
  let { work } = data.allContentJson.edges[0].node

  return (
    <section className="content">
      <Helmet title="Work / Prayash Thapa" />

      <div id="portfolio" className="fade">
        {work.map(item => {
          let imageSource = item.name.toLowerCase()

          return (
            <article className="project" key={item.name}>
              <a href={item.link} target="_blank" rel="noopener">
                <Img
                  title={item.name}
                  alt={item.name}
                  sizes={data[imageSource].sizes}
                />
              </a>

              <span className="project-details">
                <h2 className="project-title">
                  <a href={item.link} target="_blank" rel="noopener">
                    {item.name}
                  </a>
                </h2>
                <h3 className="project-description">{item.description}</h3>
                <h4 className="project-tags">{item.tags}</h4>
              </span>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export const pageQuery = graphql`
  query workQuery {
    allContentJson {
      edges {
        node {
          work {
            name
            description
            tags
            link
          }
        }
      }
    }

    nucleactor: imageSharp(id: { regex: "/nucleactor/" }) {
      sizes(maxWidth: 666) {
        ...GatsbyImageSharpSizes
      }
    }

    musiverse: imageSharp(id: { regex: "/musiverse/" }) {
      sizes(maxWidth: 666) {
        ...GatsbyImageSharpSizes
      }
    }

    processes: imageSharp(id: { regex: "/processes/" }) {
      sizes(maxWidth: 666) {
        ...GatsbyImageSharpSizes
      }
    }

    vigeverse: imageSharp(id: { regex: "/vigeverse/" }) {
      sizes(maxWidth: 666) {
        ...GatsbyImageSharpSizes
      }
    }

    luminate: imageSharp(id: { regex: "/luminate/" }) {
      sizes(maxWidth: 666) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`

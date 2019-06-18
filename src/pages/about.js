import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import '../css/about.scss'

const About = ({ data }) => {
  let { imageSharp } = data

  return (
    <section className="content">
      <Helmet title="About / Prayash Thapa" />
      <div id="about" className="fade">
        <article className="overview">
          <header>
            <h2 className="bold">Hello, I'm Prayash.</h2>
          </header>

          <br />

          <h3>
            I play{' '}
            <a
              href="http://youtube.com/iameffulgence"
              target="_blank"
              rel="noopener"
            >
              guitar
            </a>{' '}
            and write{' '}
            <a href="http://github.com/prayash" target="_blank" rel="noopener">
              code
            </a>{' '}
            that draws things.
          </h3>

          <br />

          <Img alt="Prayash Thapa" sizes={imageSharp.sizes} />

          <br />

          <p>
            I build software for a living and currently reside in{' '}
            <a
              href="https://goo.gl/maps/dRHoHcJc5WJ2"
              target="_blank"
              rel="noopener"
            >
              <del>Kathmandu, Nepal</del>
            </a>{' '}
            Boulder, CO.
          </p>

          <p>
            I use this space primarily for sharing personal projects, music, and
            other artsy things that I may be working on. If you'd like an
            overview of my professional work, check out my{' '}
            <a
              href="http://linkedin.com/in/prayasht"
              target="_blank"
              rel="noopener"
            >
              online resume
            </a>
            .
          </p>
          <p>
            Feel free to peruse my <Link to="/blog">blog</Link> if you're
            interested in any of my ramblings on art, code, music, and life
            amongst other things.
          </p>
          <p>
            Want to make something together?{' '}
            <a
              href="mailto:prayash@effulgence.io"
              target="_blank"
              rel="noopener"
            >
              Don't be a stranger!
            </a>
          </p>
        </article>
      </div>
    </section>
  )
}

export const pageQuery = graphql`
  query AboutQuery {
    imageSharp(id: { regex: "/about/" }) {
      sizes(maxWidth: 1000) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`

export default About

import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import '../../css/blog.scss'

const BlogIndex = ({ data }) => {
  let { edges: posts } = data.allMarkdownRemark
  return (
    <section className="content">
      <Helmet title="Blog / Prayash Thapa" />

      <div id="blog" className="fade">
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }, index) => {
            let { fields, frontmatter } = post

            return (
              <div className={'blog-post'} key={post.id}>
                <time dateTime={frontmatter.date}>{post.frontmatter.date}</time>
                <h2>
                  <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
                </h2>

                <p>{post.frontmatter.description}</p>
              </div>
            )
          })}
      </div>
    </section>
  )
}

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: { draft: { ne: true } }
        fileAbsolutePath: { regex: "/blog/" }
      }
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default BlogIndex

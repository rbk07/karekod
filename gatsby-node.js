const parseFilepath = require('parse-filepath')
const path = require('path')
const slash = require('slash')

exports.modifyWebpackConfig = ({ config, stage }) => {
  let glslifyFiles = /\.(glsl|frag|vert|vs|fs)$/

  switch (stage) {
    case 'develop':
      config.loader('glslify', {
        test: glslifyFiles,
        loaders: ['raw', 'glslify']
      })

      break

    case 'build-css':
      break

    case 'build-html':
      config.loader('glslify', {
        test: glslifyFiles,
        loaders: ['raw', 'glslify']
      })
      break

    case 'build-javascript':
      config.loader('glslify', {
        test: glslifyFiles,
        loaders: ['raw', 'glslify']
      })

      break
  }

  return config
}

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  let { createNodeField } = boundActionCreators
  if (node.internal.type === 'MarkdownRemark') {
    let fileNode = getNode(node.parent)
    let parsedFilePath = parseFilepath(fileNode.relativePath)
    let slug = `/${parsedFilePath.dir}`

    createNodeField({ node, name: 'slug', value: slug })
  }
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  let { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve('src/templates/blog-post-template.js')

    resolve(
      graphql(
        `
          {
            allMarkdownRemark {
              edges {
                node {
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.error) {
          reject(result.error)
        }

        result.data.allMarkdownRemark.edges.forEach(edge => {
          createPage({
            path: `${edge.node.fields.slug}`,
            component: slash(blogPostTemplate),
            context: {
              slug: edge.node.fields.slug
            }
          })
        })
      })
    )
  })
}

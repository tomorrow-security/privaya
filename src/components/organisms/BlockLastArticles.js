import { StaticQuery, graphql, Link } from "gatsby"
import React from "react"

import Container from "../atoms/Container"

export default () => (
  <StaticQuery
    query={graphql`
      query NonPageQuery {
        allMarkdownRemark(
          filter: { frontmatter: { type: { eq: "article" } } }
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 4
        ) {
          edges {
            node {
              frontmatter {
                date(formatString: "DD MMMM YYYY")
                slug
                title
              }
            }
          }
        }
      }
    `}
    render={({ allMarkdownRemark: { edges } }) => (
      <div className="py-8 bg-gray-100">
        <Container>
          <h2 className="text-center text-2xl md:text-4xl leading-none mb-8">
            Les derniers articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {edges.map(edge => (
              <Link
                to={edge.node.frontmatter.slug}
                key={edge.node.frontmatter.title}
              >
                <div className="p-4 bg-white shadow">
                  <span>{edge.node.frontmatter.title}</span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </div>
    )}
  />
)

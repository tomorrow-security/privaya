import React from "react"
import { graphql, Link } from "gatsby"

import Container from "../components/atoms/Container"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => (
  <Layout>
    <SEO title="Blog" />
    <div className="py-8 bg-gray-100">
      <Container>
        <div className="grid grid-cols-1 gap-4">
          {edges.map(edge => (
            <div
              className="p-4 bg-white shadow"
              key={edge.node.frontmatter.title}
            >
              <Link to={edge.node.frontmatter.slug}>
                {edge.node.frontmatter.title}
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </div>
  </Layout>
)

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "article" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
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
`

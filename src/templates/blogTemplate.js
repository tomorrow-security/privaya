import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Container from "../components/atoms/Container"

export default ({ data }) => {
  // this prop will be injected by the GraphQL query below
  const { markdownRemark } = data // data.markdownRemark holds the post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <div className="py-8">
        <Container>
          <h1 className="text-center text-4xl">{frontmatter.title}</h1>
          <div
            className="page"
            dangerouslySetInnerHTML={{
              __html: html,
            }}
          />
        </Container>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`

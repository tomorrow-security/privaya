import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "../components/organisms/Hero"
import How from "../components/organisms/BlockHomeHow"
import Why from "../components/organisms/BlockHomeWhy"
import LastArticles from "../components/organisms/BlockLastArticles"

export default () => (
  <Layout transparentHeader={true}>
    <SEO title="Home" />
    <Hero />
    <Why />
    <How />
    <LastArticles />
  </Layout>
)

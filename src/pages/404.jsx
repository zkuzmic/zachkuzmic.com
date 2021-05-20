import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1><span role="img" aria-label="alert">🚨</span> 404 <span role="img" aria-label="alert">🚨</span></h1>
    <p>Nothing here ¯\_(ツ)_/¯</p>
  </Layout>
)

export default NotFoundPage;

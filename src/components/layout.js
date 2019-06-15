/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css";
import "./animations.css";

const Layout = ({ children, includeHeader = true }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        {includeHeader && <Header siteTitle={data.site.siteMetadata.title} />}
        <div
          style={{
            background: "#FFFFF6",
            boxShadow: "0px 2px 15px -2px rgb(0, 0, 0, 0.2)",
            margin: 32,
          }}
        >
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 1024,
              padding: `1.5rem`,
              paddingTop: 0,
            }}
          >
            <main>{children}</main>
          </div>
        </div>
        <footer>
          © {new Date().getFullYear()} Zach Kuzmic
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

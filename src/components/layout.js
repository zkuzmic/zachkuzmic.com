/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

// Components
import Header from "./header"

// Styles
import '../../node_modules/normalize.css/normalize.css';
import styles from './layout.module.css';

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
        <>
          <div className={styles.contentWrapper}>
            <div className={styles.contentWrapperInner}>
              <main>{children}</main>
            </div>
          </div>
          <footer className={styles.footer}>
            © {new Date().getFullYear()} Zach Kuzmic
          </footer>
        </>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import { Desktop } from './screenSizes';
import Header from "./header"
import '../../node_modules/normalize.css/normalize.css';
import '../css/_app.css';

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
        <Desktop>
          {(isDesktop) => (
            <>
              <div
                style={{
                  background: "#FFFFF6",
                  boxShadow: "0px 2px 15px -2px rgb(0, 0, 0, 0.2)",
                  margin: isDesktop ? '32px 32px 16px 32px' : '3px 3px 8px 3px',
                  overflow: 'hidden'
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
              <footer style={{
                color: '#777',
                textAlign: 'center',
                fontSize: '12px',
                marginBottom: isDesktop ? '16px' : '8px',
              }}>
                © {new Date().getFullYear()} Zach Kuzmic
              </footer>
            </>
          )}
        </Desktop>
        
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

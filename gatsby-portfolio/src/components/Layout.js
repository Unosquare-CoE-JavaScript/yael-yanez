import React from "react"
import Navbar from "./Navbar"
import { useStaticQuery, graphql } from "gatsby"
import "../styles/global.css"

const Layout = ({ children }) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query SiteCopyrightData {
      site {
        siteMetadata {
          copyright
        }
      }
    }
  `)

  return (
    <div className="layout">
      <Navbar />

      <div className="content">{children}</div>

      <footer>
        <p>{siteMetadata.copyright}</p>
      </footer>
    </div>
  )
}

export default Layout

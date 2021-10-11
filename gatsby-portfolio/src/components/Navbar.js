import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"

const Navbar = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query SiteInfo {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <nav>
      <h1>{siteMetadata.title}</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Portfolio Projects</Link>
      </div>
    </nav>
  )
}

export default Navbar

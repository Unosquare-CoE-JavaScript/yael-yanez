import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import NAVIGATION_STRINGS from "../constants/navigation"

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
        {NAVIGATION_STRINGS.map(({ title, path }) => (
          <Link to={path} key={title}>
            {title}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Navbar

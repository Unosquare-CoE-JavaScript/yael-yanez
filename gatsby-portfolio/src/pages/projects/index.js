import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../../components/Layout"
import * as styles from "../../styles/projects.module.css"

const Projects = ({ data }) => {
  const {
    contact: { siteMetadata },
    projects: { nodes: projects },
  } = data

  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've Created</h3>
        <div className={styles.projects}>
          {projects.map(project => {
            const { frontmatter, id } = project
            const { slug, thumb, title, stack } = frontmatter

            return (
              <Link to={"/projects/" + slug} key={id}>
                <div>
                  <GatsbyImage image={getImage(thumb)} />
                  <h3>{title}</h3>
                  <p>{stack}</p>
                </div>
              </Link>
            )
          })}
        </div>
        <p>
          Like what you see? Email me at {siteMetadata.contact} for a quote!
        </p>
      </div>
    </Layout>
  )
}

// export page query
export const query = graphql`
  query ProjectsQuery {
    projects: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          title
          stack
          slug
          thumb {
            childImageSharp {
              gatsbyImageData(placeholder: DOMINANT_COLOR)
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`

export default Projects

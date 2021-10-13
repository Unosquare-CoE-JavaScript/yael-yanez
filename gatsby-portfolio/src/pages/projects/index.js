import React from "react"
import { graphql, Link } from "gatsby"
import { ImageElement } from "@kentico/gatsby-kontent-components"
import Layout from "../../components/Layout"
import * as styles from "../../styles/projects.module.css"

const Projects = ({ data }) => {
  const {
    projects: { nodes: projects },
    pageContent: { elements: pageContent },
  } = data

  const { title, subtitle, cta } = pageContent

  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>{title.value}</h2>
        <h3>{subtitle.value}</h3>
        <div className={styles.projects}>
          {projects.map(project => {
            const { elements: projectElements, id } = project
            const { slug, thumb, title, stack } = projectElements

            return (
              <Link to={"/projects/" + slug.value} key={id}>
                <div>
                  <ImageElement
                    image={thumb.value[0]}
                    aspectRatio={4 / 3}
                    alt={slug.value}
                    backgroundColor="transparent"
                  />
                  <h3>{title.value}</h3>
                  <p>{stack.value}</p>
                </div>
              </Link>
            )
          })}
        </div>
        <p>{cta.value}</p>
      </div>
    </Layout>
  )
}

// export page query
export const query = graphql`
  query ProjectsQuery {
    pageContent: kontentItemPage(
      elements: { id: { value: { eq: "portfolio-page" } } }
    ) {
      elements {
        title {
          value
        }
        subtitle {
          value
        }
        cta {
          value
        }
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
    projects: allKontentItemProject(sort: { fields: elements___date___value }) {
      nodes {
        elements {
          title {
            value
          }
          stack {
            value
          }
          thumb {
            value {
              url
            }
          }
          slug {
            value
          }
        }
        id
      }
    }
  }
`

export default Projects

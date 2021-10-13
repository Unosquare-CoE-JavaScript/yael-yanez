import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import { ImageElement } from "@kentico/gatsby-kontent-components"

import * as styles from "../styles/home.module.css"

const Home = ({ data }) => {
  const { elements } = data.pageContent
  const { title, subtitle, slogan, cta, mainbanner } = elements

  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>{title.value}</h2>
          <h3>{subtitle.value}</h3>
          <p>{slogan.value}</p>
          <Link className={styles.btn} to="/projects">
            {cta.value}
          </Link>
        </div>
        <ImageElement
          image={mainbanner.value[0]}
          aspectRatio={4 / 3}
          alt={title.value}
          backgroundColor="transparent"
        />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetHomePageContent {
    pageContent: kontentItemPage(
      elements: { id: { value: { eq: "home-page" } } }
    ) {
      elements {
        cta {
          value
        }
        id {
          value
        }
        mainbanner {
          value {
            url
          }
        }
        slogan {
          value
        }
        subtitle {
          value
        }
        title {
          value
        }
      }
    }
  }
`

export default Home

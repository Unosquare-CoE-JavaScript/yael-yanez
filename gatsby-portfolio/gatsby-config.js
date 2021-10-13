/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    "gatsby-transformer-remark",
    {
      resolve: `@kentico/gatsby-source-kontent`,
      options: {
        projectId: `faaa98ea-8982-00a3-8612-060dfbd0611f`,
        languageCodenames: [`default`],
      },
    },
  ],
  siteMetadata: {
    title: "Yael Yañez",
    description: "web dev portfolio",
    copyright: "This website is copyright 2021 Yael Yañez",
    contact: "yael.yanez@unosquare.com",
  },
}

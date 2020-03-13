module.exports = {
  siteMetadata: {
    title: `Jason Zheng - Front-End Developer`,
    description: `Personal portfolio site showcasing my works`,
    author: `Jason Zheng`,
    // siteUrl: ``
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jason Zheng - Front-End Web Developer`,
        short_name: `Jason - Web Developer`,
        start_url: `/`,
        background_color: `#243184`,
        theme_color: `#243184`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

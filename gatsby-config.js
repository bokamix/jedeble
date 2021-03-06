module.exports = {
  siteMetadata: {
    title: `Jede`,
    description: `Jede Portfolio website. Lock at my portfolio and contact with me.`,
    author: `Jede.pl`,
  },
  plugins: [
      'gatsby-plugin-sass',

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
        name: `Jedeble`,
        short_name: `Jedeble`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        
        typeName: "PORTFOLIO",
       
        fieldName: "portfolio",
    
        url: "https://api-euwest.graphcms.com/v1/cjx7joeax18zv01c3uj9l3tzl/master",
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

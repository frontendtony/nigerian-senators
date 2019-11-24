module.exports = {
  siteMetadata: {
    title: `Nigerian Senators`,
    description: `Find your representative in the Nigerian Senate with ease, including their contact details.`,
    author: `Anthony Oyathelemhi`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `nigerian-senators`,
        short_name: `senators`,
        start_url: `/`,
        background_color: `#64ffda`,
        theme_color: `#64ffda`,
        display: `minimal-ui`
        //icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`
  ]
};

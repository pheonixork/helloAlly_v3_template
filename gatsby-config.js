/* eslint-disable no-undef */
module.exports = {
  plugins: [
    'gatsby-plugin-top-layout',
    // If you want to use styled components you should add the plugin here.
    // 'gatsby-plugin-styled-components',
    'gatsby-plugin-mui-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-sass',

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ally Digital Solutions`,
        short_name: `AllyDigital`,
        start_url: `/`,
        background_color: `#222B45`,
        theme_color: `#222B45`,
        display: `standalone`,
        icon: `src/images/icon2.png`,
        crossOrigin: `use-credentials`, 
      },
    },
  ],
  siteMetadata: {
    title: 'theFront - Material-UI Multipurpose Theme and UI Kit',
  },
};

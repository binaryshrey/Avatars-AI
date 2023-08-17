/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [{
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'AVATARS AI',
        short_name: 'AVATARS AI',
        start_url: '/',
        background_color: '#000000',
        theme_color: '#ffffff',
        display: 'standalone',
        icon: './logo.svg',
      },
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
    },
    {
      resolve: 'gatsby-plugin-netlify',
    },
    {
    resolve: `gatsby-plugin-scroll-reveal-with-new-react`,
    options: {
        threshold: 0.2, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
        disable: false, // Flag for disabling animations
    }
  }
  ],
  siteMetadata: {
    title: "ΛVΛTΛRS ΛI",
    description: "ΛVΛTΛRS ΛI • Your Personal AI Chat Companion",
    twitterUsername: `@avatars_ai_app`,
    image: `/logo.png`,
    siteUrl: `https://www.avatars-ai.chat`,
  },
}

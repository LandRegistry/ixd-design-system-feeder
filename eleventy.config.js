import { govukEleventyPlugin } from '@x-govuk/govuk-eleventy-plugin'

export default function(eleventyConfig) {
  // Register the plugin
  eleventyConfig.addPlugin(govukEleventyPlugin, {
    header: {
      logotype: {
        text: 'Interaction designers, feeder to HMLR Design System'
      },
    },
    footer: {
      copyright: {
        text: ' '
      },
      contentLicence: {
        text: ' '
      },
    },
    stylesheets: ['/assets/styles.css']
  })

  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    pathPrefix: "/ixd-design-system-feeder/",
    dir: {
      // The folder where all your content will live:
      input: 'docs',
    }
  }
};
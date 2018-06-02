const tailwindcss = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:\/]+/g) || [];
  }
}

class DefaultExtractor {
  static extract(content) {
      return content.match(/[A-Za-z0-9_-]+/g) || []
  }
}

module.exports = {
  plugins: [
    tailwindcss('./tailwind.js'),
    purgecss({
      content: ['./**/*.pug', './src/**/*.js'],
      extractors: [{
        extractor: TailwindExtractor,
        extensions: ['pug']
      }, {
        extractor: DefaultExtractor,
        extensions: ['js']
      }]
    })
  ]
}
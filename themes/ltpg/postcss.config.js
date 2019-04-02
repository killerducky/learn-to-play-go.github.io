var tailwindcss = require('tailwindcss')
var purgecss = require('@fullhuman/postcss-purgecss')

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
  }
}

module.exports = {
  plugins: [
    tailwindcss('./tailwind.config.js'),
    require('autoprefixer')({ /* ...options */ }),
    require('cssnano')({}),
    // purgecss({
    //     content: ['./layouts/**/*.html'],
    //     extractors: [
    //       {
    //       extractor: TailwindExtractor,
    //       extensions: ['html']
    //     }
    //   ],
    //   whitelist: []
    // }),
    ]
}
const path = require('node:path')
const sass = require('sass')

module.exports = {
  outputFileExtension: 'css',

  compile: function (inputContent, inputPath) {
    const parsed = path.parse(inputPath)
    const result = sass.compileString(inputContent, {
      loadPaths: [
        parsed.dir || '.',
        this.config.dir.includes,
        './node_modules'
      ],
      quietDeps: true
    })

    return (data) => {
      return result.css
    }
  }
}
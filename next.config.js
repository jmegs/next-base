const withCSS = require('@zeit/next-css')
const fs = require('fs')
const { join } = require('path')
const { promisify } = require('util')
const copyFile = promisify(fs.copyFile)

// Wraps whole export in the CSS wrapper
module.exports = withCSS({
  exportPathMap: async function(defaultPathMap, { dev, dir, outDir }) {
    if (dev) {
      return defaultPathMap
    }
    // Copies Favicon to output in production
    await copyFile(join(dir, 'favicon.ico'), join(outDir, 'favicon.ico'))

    // Use this return statement to do more complicated export path mapping
    return defaultPathMap
  }
})

const withPlugins = require('next-compose-plugins')
const css = require('@zeit/next-css')

const nextConfig = {
  webpack: config => {
    // Fixes npm packages that depend on 'fs' module
    config.node = {
      fs: 'empty'
    }

    return config
  }
}

module.exports = withPlugins([css], nextConfig)

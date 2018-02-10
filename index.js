'use strict'

const npmUserPackages = require('npm-user-packages')
const counts = require('download-counts')

module.exports = async author => {
  let packages = await npmUserPackages(author)
  for (const pkg of packages) {
    pkg.downloads = counts[pkg.name] || 0
  }
  packages.sort((a, b) => b.downloads - a.downloads)
  return packages
}

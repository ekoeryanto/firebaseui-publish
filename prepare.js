const fs = require('fs')

const pkg = require('./firebaseui-id/package.json')

pkg.name = 'firebaseui-id'
pkg.files = [
  "dist/firebaseui*.js",
  "dist/firebaseui.css",
  "dist/npm*.js",
  "dist/esm*.js",
  "dist/index.d.ts",
  "dist/externs",
  "LICENSE",
  "README.md",
  "package.json"
]

pkg.repository = 'github:ekoeryanto/firebaseui-web'
pkg.main = "./dist/npm__id.js",
pkg.module = "./dist/esm__id.js",
pkg.browser = "./dist/firebaseui__id.js"

delete pkg.publishConfig
delete pkg.scripts.prepublish

fs.writeFileSync('./package.json', JSON.stringify(pkg, null, 2))

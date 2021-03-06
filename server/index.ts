const express = require('express')
const Builder = require('nuxt').Builder
const Nuxt = require('nuxt').Nuxt

const app = express()

const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000


let str: string = '111'
console.log(str)


// Import and set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

const nuxt = new Nuxt(config)

// Start build process in dev mode
if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

// Give nuxt middleware to express
app.use(nuxt.render)

// Start express server
app.listen(port, host)

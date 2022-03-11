const server = require('./server')

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  const envConfig = require('dotenv').config()
  module.exports = envConfig
  if (envConfig.error) throw envConfig.error
}

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Server listening on port', PORT)
})

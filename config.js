module.exports = require('rc')('david', {
  brains: {
    cacheTime: 86400000
  },
  github: {
    api: {
      version: '3.0.0',
      protocol: 'https',
      host: 'api.github.com'
    },
    protocol: 'https',
    host: 'github.com',
    oauth: {
      id: "",
      secret: ""
    },
    token: ""
  },
  npm: {
    hostname: 'https://npm.infra.tstllc.net',
    options: {
      registry: 'https://npm.infra.tstllc.net'
    },
    feed: 'https://skimdb.npmjs.com/registry'
  },
  site: {
    hostname: 'https://david.infra.tstllc.net'
  },
  db: {
    path: 'data'
  },
  nsp: {
    syncAdvisoriesInterval: 3600000
  }
})

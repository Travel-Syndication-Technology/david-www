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
      id: "cb7e1bb8a1f7c0487cfc",
      secret: "1830ea3c0da6fa7289842fbb4e3d2f22f3833f5c"
    },
    token: "7fc4b20b45d2c52e193e026a574274c1e8560813"
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

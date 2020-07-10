
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
        "google-analytics": {
            "clientId": "687590004878-m6e54ara1jdquhhs73i35nlg2a8qpee8.apps.googleusercontent.com",
            "views": "ga:221720030"
        }
    }
  }

  return {
    "google-analytics": {
        "clientId": "687590004878-m6e54ara1jdquhhs73i35nlg2a8qpee8.apps.googleusercontent.com",
        "views": "ga:221720030"
    }
  }
  
}

const withImages = require('next-images')
module.exports = withImages()
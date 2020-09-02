require('dotenv').config()

module.exports = {
    env: {
      STEP: process.env.REACT_APP_NASA_KEY,
    }
    // serverRuntimeConfig: {
    //   // Will only be available on the server side
    //   MY_SECRET: process.env.MY_SECRET,
    // },
    // publicRuntimeConfig: {
    //   // Will be available on both server and client
    //   API_ENDPOINT: '/myapi/version/1',
    // },
};

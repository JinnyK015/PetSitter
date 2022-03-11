import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import store from './store'

import App from './components/App'
import { Auth0Provider } from '@auth0/auth0-react'

import ScrollToTop from './components/ScrollToTop'

// import config from './auth_config.json'
// import envConfig from '../server/index'
// import dotenv from 'dotenv'
// const envConfig = dotenv.config()
// console.log(envConfig)
// how to grab heroku's config????????????????????? or do i need to something differance????
const config = {
  domain: process.env.AUTH0_DOMAIN,
  clientId: process.env.AUTH0_CLIENT_ID,
  audience: process.env.AUTH0_SSO_AUDIENCE
}

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Auth0Provider
      domain={config.domain}
      clientId={config.clientId}
      redirectUri={window.location.origin}
      audience={config.audience}
    >
      <Provider store={store}>
        <Router>
          <ScrollToTop />
          <App />
        </Router>
      </Provider>
    </Auth0Provider>,
    document.getElementById('app')
  )
})

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import store from './store'

import App from './components/App'
import { Auth0Provider } from '@auth0/auth0-react'

import ScrollToTop from './components/ScrollToTop'

const config = {
  domain: 'harakeke-2022-jinny.au.auth0.com',
  clientId: 'jIPxlFp4Wk62we7zJ2IFBHj15OavlgQZ',
  audience: 'https://petsitter/api'
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

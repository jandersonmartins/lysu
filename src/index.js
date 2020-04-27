import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import App from './App'
import * as serviceWorker from './serviceWorker'

import './i18n'

ReactDOM.render((
  <ThemeProvider theme={theme}>
    <Suspense fallback={<h1>...</h1>}>
      <App />
    </Suspense>
  </ThemeProvider>
), document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()

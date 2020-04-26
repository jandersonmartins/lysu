import React, { useEffect, Suspense } from 'react'
import { hot } from 'react-hot-loader/root'
import { ThemeProvider } from 'styled-components'
import { Normalize } from 'styled-normalize'
import ReactGA from 'react-ga'
import theme from './theme'
import { Head } from './Head'
import { Header } from './Header'
import { Main } from './Main'
import { Shopping } from './Shopping'
import AppStyle from './App.style'

const App = () => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      ReactGA.initialize('UA-163363657-1')
      ReactGA.pageview(window.location.pathname + window.location.search)
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<h1>...</h1>}>
        <Head />

        <Normalize />
        <AppStyle />

        <Header />

        <Main>
          <Shopping />
        </Main>
      </Suspense>
    </ThemeProvider>
  )
}

export default hot(App)

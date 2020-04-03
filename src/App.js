import React from 'react'
import { hot } from 'react-hot-loader/root'
import { ThemeProvider } from 'styled-components'
import { Normalize } from 'styled-normalize'
import theme from './theme'
import { Header } from './Header'
import { Main } from './Main'
import { Shopping } from './Shopping'
import AppStyle from './App.style'

const App = () => (
  <ThemeProvider theme={theme}>
    <Normalize />
    <AppStyle />

    <Header />

    <Main>
      <Shopping />
    </Main>
  </ThemeProvider>
)

export default hot(App)

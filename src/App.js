import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import { Header } from './Header'
import AppStyle from './App.style'

const App = () => (
  <ThemeProvider theme={theme}>
    <AppStyle />
    <Header />
  </ThemeProvider>
)

export default App

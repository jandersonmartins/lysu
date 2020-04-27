import React, { useEffect } from 'react'
import { hot } from 'react-hot-loader/root'
import { Normalize } from 'styled-normalize'
import ReactGA from 'react-ga'
import { useTranslation } from 'react-i18next'
import { Head } from './Head'
import { Header } from './Header'
import { Main } from './Main'
import { Shopping } from './Shopping'
import AppStyle from './App.style'

const App = () => {
  const { i18n } = useTranslation()

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      ReactGA.initialize('UA-163363657-1')
      ReactGA.pageview(window.location.pathname + window.location.search)
    }
  }, [])

  const handleOnSelectLang = key => i18n.changeLanguage(key)

  return (
    <>
      <Head />

      <Normalize />
      <AppStyle />

      <Header currentLang={i18n.language} onSelectLang={handleOnSelectLang} />

      <Main>
        <Shopping />
      </Main>
    </>
  )
}

export default hot(App)

import { createGlobalStyle } from 'styled-components'

const AppStyle = createGlobalStyle`
  * {
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Lato', sans-serif;
    box-sizing: border-box;
  }
`

export default AppStyle

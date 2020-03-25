import { createGlobalStyle } from 'styled-components'

const AppStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: inherit;
    text-decoration: none;
  }

  html {
    font-size: 62.5%;
  }

  body {
    box-sizing: border-box;
  }
`

export default AppStyle

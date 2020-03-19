import { createGlobalStyle } from 'styled-components'

const AppStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: inherit;
    text-decoration: none;
  }

  body {
    box-sizing: border-box;
  }
`

export default AppStyle

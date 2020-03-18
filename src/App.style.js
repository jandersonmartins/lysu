import { createGlobalStyle } from 'styled-components'

const AppStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: inherit;
  }

  body {
    box-sizing: border-box;
  }
`

export default AppStyle

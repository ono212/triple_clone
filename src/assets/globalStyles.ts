import { createGlobalStyle } from 'styled-components'

const globalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: sans-serif !important;
  }

  html,
  body,
  #app {
    height: 100%;
    overflow: hidden;
    margin: 0 auto;
    padding: 0;
    min-width: 1200px;
  }

  button {
    cursor: pointer;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`

export default globalStyles

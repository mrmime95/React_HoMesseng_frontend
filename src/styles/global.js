import { createGlobalStyle } from 'styled-components'
import normalize from 'styled-normalize'
import { ROOT_ELEMENT_ID } from '../utils/constants'
import { FONT_FAMILY, FONT_SIZES, COLORS } from '../styles/theme'

const GlobalStyles = createGlobalStyle`
  ${normalize}
  * {
    box-sizing: border-box;
  }
  html, body, #${ROOT_ELEMENT_ID}, #site-main {
    height: 100%;
  },
  body {
    font-family: ${FONT_FAMILY};
    font-size: ${FONT_SIZES.body};
    color: ${COLORS.softDark};
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  img {
    width: 100%;
  }
  /* Keep adding global styles here. */
`

export default GlobalStyles

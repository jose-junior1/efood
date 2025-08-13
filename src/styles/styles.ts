
import { createGlobalStyle } from 'styled-components'
import colors from './colors'

export const GlobalStyles = createGlobalStyle`
  * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
        list-style: none;
    }

    body {
        background-color: ${colors.pureWhite};
        color: ${colors.rose};
    }

    .container {
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;
    }
`

import { createGlobalStyle } from 'styled-components'
import theme from './theme'

export const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }
  
  body {
    background-color: ${theme.colors.black};
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    font-family: ${theme.fonts.family.default};
  }

`

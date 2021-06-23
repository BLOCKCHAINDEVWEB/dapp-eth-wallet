import { createGlobalStyle } from 'styled-components'


export const GlobalStyles = createGlobalStyle`
  html,
  body,
  #root {
    display: flex;
    flex-grow: 1;
    min-height: 100%;
    flex-direction: column;
    overflow: hidden;
  }
  *,
  ::after,
  ::before {
    box-sizing: border-box;
  }

  body {
    font-family: Roboto, Helvetica, Arial, sans-serif;
    background: #E8E8E8;
    color: black;
    margin: 0;
    padding: 0;
  }
  button {
    color: inherit;
    font: inherit;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    line-height: normal;
    border: none;
    text-align: inherit;
    background-color: transparent;
    outline: none;
  }
  button.active {
    font-weight: bold;
    outline: none;
  }
  main {
    position relative;
    height: 100vh;
    margin: auto 30px;
  }
`


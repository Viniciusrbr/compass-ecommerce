import './App.css'
import { Fragment } from 'react'
import { createGlobalStyle } from 'styled-components'
import HomePage from './pages/HomePage'


const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto Flex', sans-serif;
    margin: 0;
  }
`

function App() {
  return (
    <>
      <GlobalStyle />
      <HomePage />
    </>
  )
}

export default App

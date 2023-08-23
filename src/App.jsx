import './App.css'
import { Fragment } from 'react'
import { createGlobalStyle } from 'styled-components'
import HomePage from './pages/HomePage'
import MainBanner from './components/MainBanner/index'

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
      <MainBanner />
    </>
  )
}

export default App

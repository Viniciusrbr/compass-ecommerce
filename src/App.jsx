import './App.css'
import { Fragment } from 'react'
import { createGlobalStyle } from 'styled-components'
import Theme from './Theme';
import HomePage from './pages/HomePage'
import CartPage from './pages/CartPage'


const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto Flex', sans-serif;
    margin: 0;
  }
`

function App() {
  return (
    <Theme>
      <GlobalStyle />
      <HomePage />
    </Theme>
  );
};

export default App

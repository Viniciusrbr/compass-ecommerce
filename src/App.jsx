<<<<<<< HEAD
import './App.css'
import { Fragment } from 'react'
import { createGlobalStyle } from 'styled-components'
import Theme from './Theme';
import HomePage from './pages/HomePage'
import CartPage from './pages/CartPage'
=======
import "./App.css";
import HomePage from "./pages/HomePage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/root";
import CartPage from "./pages/CartPage";
import ProductDetailsPage from "./pages/ProductDetails";
import { CartProvider } from "./store/CartContext";
>>>>>>> c174f967d40cecfde9ca6d981686340b5d158e4c

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <CartProvider>
        <RootLayout />
      </CartProvider>
    ),
    children: [
      { index: true, element: <HomePage /> },
      { path: "cart", element: <CartPage /> },
      { path: "productDetails", element: <ProductDetailsPage /> },
    ],
  },
]);

function App() {
<<<<<<< HEAD
  return (
    <Theme>
      <GlobalStyle />
      <CartPage />
    </Theme>
  );
};
=======
  return <RouterProvider router={router} />;
}
>>>>>>> c174f967d40cecfde9ca6d981686340b5d158e4c

export default App;

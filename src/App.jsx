import "./App.css";
import HomePage from "./pages/HomePage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/root";
import CartPage from "./pages/CartPage";
import ProductDetailsPage from "./pages/ProductDetails";
import { CartProvider } from "./store/CartContext";

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
  return <RouterProvider router={router} />;
}

export default App;

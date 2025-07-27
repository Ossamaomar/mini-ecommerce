import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import AppLayout from "./components/AppLayout";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import { ProductsProvider } from "./contexts/ProductsContext";
import { ThemeProvider } from "./contexts/DarkModeContext";
import { Toaster } from "sonner";
import NotFound from "./components/NotFound";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },

      {
        path: "productDetails/:productId",
        element: <ProductDetails />,
      },
      {
        path: "*",
        element: <NotFound />
      }
    ],
  },
]);

function App() {
  return (
    <ThemeProvider>
      <ProductsProvider>
        <RouterProvider router={router} />
        <Toaster position="top-center" />
      </ProductsProvider>
    </ThemeProvider>
  );
}

export default App;

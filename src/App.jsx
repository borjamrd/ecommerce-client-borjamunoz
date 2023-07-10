


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./index.css";
import Catalog from "./pages/Catalog";
import Product from "./pages/Product";
import Header from "./components/Header";

let router = createBrowserRouter([
  {
    path: "/",
    loader: () => ({ message: "Hello Data Router!" }),
    Component() {
      return <Catalog></Catalog>;
    },
  },
  {
    path: "/:id",
    loader: () => ({ message: "Hello Data Router!" }),
    Component() {
      return <Product></Product>;
    },
  },
]);

export default function App() {
  return <div>
    <Header />
    <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
  </div>



}

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}
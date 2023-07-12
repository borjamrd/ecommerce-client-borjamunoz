



import React, { Suspense } from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import DefaultLayout from "./containers/DefaultLayout";
import { CartProvider } from "./context/CartContext";
import storageExpired from "./helpers/storageExpired";
import "./index.css";
import NoMatch from "./pages/NoMatch";

const Catalog = React.lazy(() => import('./pages/Catalog'))
const Product = React.lazy(() => import('./pages/Product'))


export default function App() {

  storageExpired()

  return (
    <>
      <div className="bg-slate-900 min-h-screen px-3">
        <CartProvider>
          <BrowserRouter>
            <Header />
            <DefaultLayout>
              <Suspense fallback={<div>...loading</div>} >
                <Routes>
                  <Route exact path="/" element={<Catalog />} />
                  <Route path="/:id" element={<Product />} />
                  <Route path="*" element={<NoMatch />} />
                </Routes>
              </Suspense>
            </DefaultLayout>
          </BrowserRouter>

        </CartProvider >
      </div>

    </>


  )



}

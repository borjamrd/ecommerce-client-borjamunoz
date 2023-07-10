



import React, { Suspense } from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Breadcrumbs from "./components/Breadcrumbs";
import Header from "./components/Header";
import DefaultLayout from "./containers/DefaultLayout";
import "./index.css";
import NoMatch from "./pages/NoMatch";

const Catalog = React.lazy(() => import('./pages/Catalog'))
const Product = React.lazy(() => import('./pages/Product'))


export default function App() {
  return (
    <>

      <BrowserRouter>
        <DefaultLayout>

          <Header />
          <Breadcrumbs />
          <Suspense fallback={<div>...loading</div>} >
            <Routes>
              <Route exact path="/" element={<Catalog />} />
              <Route path="/:id" element={<Product />} />
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </Suspense>
        </DefaultLayout>
      </BrowserRouter>
    </>


  )



}

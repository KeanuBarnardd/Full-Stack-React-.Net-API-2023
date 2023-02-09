import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Product from "./Pages/Product";
import ProductDetails from "./Pages/ProductDetails";
import ProductList from "./Pages/ProductList";
import CreateProduct from "./Pages/CreateProduct";
import NotFound from "./NotFound";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="product">
        <Route path="" element={<Product />}></Route>
        <Route path="details" element={<ProductDetails />}></Route>
        <Route path="list" element={<ProductList />}></Route>
        <Route path="create" element={<CreateProduct />}></Route>
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  </BrowserRouter>
);

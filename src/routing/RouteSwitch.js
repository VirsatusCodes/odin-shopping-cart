import React, { useState } from "react";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import productList from "../products/productList.js";
import "../styling/generalStyling.css";
import Nav from "../components/NavBar";
import HomePage from "../pages/HomePage";
import CataloguePage from "../pages/CataloguePage";
import ItemPage from "../pages/ItemPage.js";
import CheckoutPage from "../pages/CheckoutPage.js";

const RouteSwitch = () => {
  const [cart, setCart] = useState({
    fullCart: [],
    item: {
      id: "",
      quantity: 0,
    },
  });

  const onChange = (e) => {
    const { dataset } = e.target;

    setCart({
      ...cart,
      item: {
        id: dataset.value,
        quantity: Number(e.target.value),
        /* without this when it gets the value from
            the input it provides the value as a string */
      },
    });
  };

  const onSubmit = () => {
    setCart({
      fullCart: cart.fullCart.concat(cart.item),
      item: {
        id: "",
        quantity: 0,
      },
    });
  };
  return (
    <HashRouter>
      <div className="App">
        <Nav cart={cart} />
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route
            path="/Catalogue"
            element={<CataloguePage productList={productList} />}
          />

          <Route
            path="/Checkout"
            element={<CheckoutPage productList={productList} cart={cart} />}
          />

          <Route
            path="/Catalogue/Item/:id"
            element={
              <ItemPage
                productList={productList}
                setCart={setCart}
                cart={cart}
                onChange={onChange}
                onSubmit={onSubmit}
              />
            }
          />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default RouteSwitch;

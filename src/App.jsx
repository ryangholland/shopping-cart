import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import StoreFront from "./components/StoreFront";
import ItemDetails from "./components/ItemDetails";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import AllItems from "./components/store_views/AllItems";
import Womens from "./components/store_views/Womens";
import Mens from "./components/store_views/Mens";
import Jewelry from "./components/store_views/Jewelry";
import Electronics from "./components/store_views/Electronics";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        data.forEach((product) => {
          product.inCart = 0;
        });
        setProducts(data);
      })
      .catch((error) => {
        console.log(error);
        console.log("Fetch error. Generating test item...");
        setProducts([
          {
            id: 1,
            title: "Test",
            price: "9.99",
            rating: { rate: 4.0, count: 500 },
            inCart: 0,
          },
        ]);
      });
  }, []);

  const handleAddProduct = (id) => {
    const newProducts = products.map((product) => {
      if (product.id === id) product.inCart += 1;
      return product;
    });
    setProducts(newProducts);
  };

  const handleRemoveProduct = (id) => {
    const newProducts = products.map((product) => {
      if (product.id === id) product.inCart -= 1;
      return product;
    });
    setProducts(newProducts);
  };

  return (
    <>
      <Header
        products={products}
        handleAddProduct={handleAddProduct}
        handleRemoveProduct={handleRemoveProduct}
      />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route
          path="/products"
          element={
            <StoreFront
              products={products}
              handleAddProduct={handleAddProduct}
              handleRemoveProduct={handleRemoveProduct}
            />
          }
        >
          <Route path="all" element={<AllItems />} />
          <Route path="womens" element={<Womens />} />
          <Route path="mens" element={<Mens />} />
          <Route path="jewelry" element={<Jewelry />} />
          <Route path="electronics" element={<Electronics />} />
        </Route>
        <Route
          path="/products/:id"
          element={<ItemDetails products={products} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

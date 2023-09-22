import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import StoreFront from "./components/StoreFront";
import ItemDetails from "./components/ItemDetails";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";


function App() {  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/products" element={<StoreFront products={products} />} />
        <Route path="/products/:id" element={<ItemDetails products={products} />} />
        {/* <ItemDetails />*/}
      </Routes>
      <Footer />
    </>
  );
}

export default App;

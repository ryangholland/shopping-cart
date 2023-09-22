import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import StoreFront from "./components/StoreFront";
import ItemDetails from "./components/ItemDetails";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import AllItems from "./components/store_views/AllItems";
import Womens from "./components/store_views/Womens"
import Mens from "./components/store_views/Mens";
import Jewelry from "./components/store_views/Jewelry";
import Electronics from "./components/store_views/Electronics";


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
        <Route path="/products" element={<StoreFront products={products} />}>
         <Route path="all" element={<AllItems />} />
          <Route path="womens" element={<Womens />} />
          <Route path="mens" element={<Mens />} />
          <Route path="jewelry" element={<Jewelry />} />
          <Route path="electronics" element={<Electronics />} />
        </Route>
        <Route path="/products/:id" element={<ItemDetails products={products} />} />
        {/* <ItemDetails />*/}
      </Routes>
      <Footer />
    </>
  );
}

export default App;

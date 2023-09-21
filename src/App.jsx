import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import StoreFront from "./components/StoreFront";
import ItemDetails from "./components/ItemDetails";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/store" element={<StoreFront />} />
        {/* <ItemDetails />*/}
      </Routes>
      <Footer />
    </>
  );
}

export default App;

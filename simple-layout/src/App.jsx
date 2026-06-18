import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Sketchbook from "./components/Sketchbook";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Products />
        <Sketchbook />
      </main>

      <Footer />
    </>
  );
}

export default App;
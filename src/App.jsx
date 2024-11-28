import { useState } from "react";
import Footer from "./components/Footer/Footer";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import VideoDes from "./components/VideoDes/VideoDes";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Des from "./components/Description/Des";
import SupplierCard from "./components/SupplierCard/SupplierCard";

import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="mian min-h-screen min-w-screen relative">
        <Navbar />
        <Hero />
        <Des />
        <VideoDes />
        <SupplierCard />
        <HowItWorks />
        <Footer />
      </div>
    </>
  );
}

export default App;

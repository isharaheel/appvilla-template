import React, { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./Components/Navbar/Navbar";
import Title from "./Components/Title/Title";
import Features from "./Components/Features/Features";
import Team from "./Components/Team/Team";
import Pricing from "./Components/Pricing/Pricing";
import Purchase from "./Components/Purchase/Purchase";
import Footer from "./Components/Footer/Footer";
import Icon from "./Components/Icon/Icon";
import Loader from "./Components/Loader/Loader";

export default function App() {
  const [loading, setLoading] = useState(true);

useEffect(() => {
  setTimeout(() => setLoading(false), 2000);
}, []);

if (loading) {
  return <Loader />
}
;

  return (
    <>
      <Icon />
      <NavBar />

      <div id="home">
        <Title />
      </div>

      <div id="features">
        <Features />
      </div>

      <Team />

      <div id="pricing">
        <Pricing />
      </div>

      <Purchase />
      <Footer />
    </>
  );
}

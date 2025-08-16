import { Fragment, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Banner></Banner>
      <Footer></Footer>
      
    </Fragment>
  );
}

export default App;

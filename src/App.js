import React from "react";
import {Navbar} from "./components/navbar/Navbar";
import {Books} from "./components/books/Books";
import {Intro} from "./components/intro/Intro";
import {Contact} from "./components/contact/Contact";
import {Footer} from "./components/footer/Footer";

function App(){
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Books/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

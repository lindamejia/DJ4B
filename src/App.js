import React, { Component } from "react";
// import { Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Featured from "./components/featured/Featured";
import Tour from "./components/tour/Tour";
import Music from "./components/music/Music";
import Merch from "./components/merch/Merch";
import Contact from "./components/contact/Contact";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home title="home" subtitle="home" dark={true} id="Home" />
        <Featured
          title="featured"
          subtitle="Featured"
          dark={true}
          id="Featured"
        />
        <Tour title="tour" subtitle="4B Touring" dark={true} id="tour" />
        <Music title="Music" subtitle="Music" dark={true} id="music" />
        <Merch />
        <Contact />
      </div>
    );
  }
}

export default App;

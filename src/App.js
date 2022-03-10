import React, { Component } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Featured from "./components/featured/Featured";
import Tour from "./components/tour/Tour";
import Music from "./components/music/Music";
import Merch from "./components/merch/Merch";
import Contact from "./components/contact/Contact";
import Countdown from "./components/countdown/Countdown";
import Announcement from "./components/announcement/Announcement";
import Youtube from "./components/youtube/Youtube.jsx";

var moment = require("moment-timezone");
moment().tz("America/Los_Angeles").format();

class App extends Component {
  render() {
    var june = moment("2021-01-13T20:00:00Z");
    var date = june.tz("America/Los_Angeles").format("MM-DD-YYYY h:mm:ss a");
    console.log(date);

    return (
      <div className="App">
        <Header />
        <Home title="home" subtitle="home" dark={true} id="Home" />
        <Youtube
          title="featured"
          subtitle="Featured"
          dark={true}
          id="Featured"
        />
        <Tour title="tour" subtitle="4B Touring" dark={true} id="tour" />
        <Music title="Music" subtitle="Music" dark={true} id="music" />
        <Merch title="Merch" subtitle="Merch" dark={true} id="merch" />
        <Contact />
      </div>
    );
  }
}

export default App;

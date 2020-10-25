import React, { Component } from "react";
import style from "./Tour.module.css";

export default class Tour extends Component {
  render() {
    return (
      <div className={style.tour} id="tour">
        <h1 style={{ color: "white" }}> TOUR DATES</h1>
        <a
          className="bit-widget-initializer"
          data-artist-name="dj4b"
          data-display-local-dates="false"
          data-display-past-dates="false"
          data-auto-style="false"
          data-text-color="#ffffff"
          data-link-color="#000000"
          data-background-color="rgba(0,0,0,0)"
          data-display-limit="15"
          data-link-text-color="#FFFFFF"
          data-display-lineup="false"
          data-display-play-my-city="true"
          data-separator-color="rgba(124,124,124,0.25)"
          data-display-start-time="false"
        ></a>
      </div>
    );
  }
}

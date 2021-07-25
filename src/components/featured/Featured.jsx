import React, { Component } from "react";
import style from "./Featured.module.css";
import corvette from "../../images/corvette.jpeg";

export default class Featured extends Component {
  render() {
    return (
      <div className={style.featured}>
        <div className={style.gn} id="home">
          <a href="https://soundcloud.com/dj4b/adderall-4b-x-808gong-remix-1" target="_blank">
            <img className={style.image} src={corvette} />
          </a>
        </div>
      </div>
    );
  }
}

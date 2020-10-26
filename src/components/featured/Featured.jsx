import React, { Component } from "react";
import style from "./Featured.module.css";
import nvr2 from "../../images/nvr2.png";
import goingNowhere from "../../images/going-nowhere.jpg";

export default class Featured extends Component {
  render() {
    return (
      <div className={style.featured}>
        <div className={style.gn} id="home">
          <a href="https://ffm.to/goingnowhere" target="_blank">
            <img className={style.image} src={goingNowhere} />
          </a>
        </div>
        <div className={style.never}>
          <a href="https://ffm.to/4b-dope" target="_blank">
            <img className={style.image} src={nvr2} />
          </a>
        </div>
      </div>
    );
  }
}

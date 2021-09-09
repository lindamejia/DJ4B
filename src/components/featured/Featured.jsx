import React, { Component } from "react";
import style from "./Featured.module.css";
import there4u from "../../images/there4u.jpeg";

export default class Featured extends Component {
  render() {
    return (
      <div className={style.featured}>
        <div className={style.gn} id="home">
          <a href="https://ffm.to/there4you" target="_blank">
            <img className={style.image} src={there4u} />
          </a>
        </div>
      </div>
    );
  }
}

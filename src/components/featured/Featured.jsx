import React, { Component } from "react";
import style from "./Featured.module.css";
import featuredImage from "../../images/main-new.jpg";

export default class Featured extends Component {
  render() {
    return (
      <div className={style.featured}>
        <h1 className={style.caption}>
          4B - Lucid feat. Austin Mahone
          <br /> and Abraham Mate
        </h1>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Wsmr3UcxTz8"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen=""
        ></iframe>
      </div>
    );
  }
}

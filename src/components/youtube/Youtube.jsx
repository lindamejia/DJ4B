import React, { Component } from "react";
import style from "./youtube.module.css";

class Youtube extends Component {
  render() {
    return (
      <div className={style.home} id="featured">
        <div className={style.videoContainer}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/nK_7FXdLZ_k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    );
  }
}
export default Youtube;

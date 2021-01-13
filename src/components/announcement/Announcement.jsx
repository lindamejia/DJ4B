import React, { Component } from "react";
import style from "./Announcement.module.css";

export default class Announcement extends Component {
  render() {
    return (
      <div className={style.background}>
        <div class={style.sign}>
          <p class={style.word}>4B & FRIENDS</p>
        </div>
        <br/>
        <a
          href="https://parknrave.frontgatetickets.com/"
          className={style.button}
        >
          TICKETS
        </a>
      </div>
    );
  }
}

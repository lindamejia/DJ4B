import React, { Component } from "react";
import style from "./Announcement.module.css";

export default class Announcement extends Component {
  render() {
    return (
      <div className={style.background}>
        <div class={style.sign}>
          <p class={style.word}>4B & FRIENDS</p>
        </div>
        <br />
        <a
          href="https://parknrave.frontgatetickets.com/event/mss4t9t7fgkgw7kt"
          className={style.button}
          target="_blank"
        >
          FRIDAY TICKETS
        </a>
        <a
          href="https://parknrave.frontgatetickets.com/event/s9ep2pja5j7hr45c"
          className={style.button}
          target="_blank"
        >
          SATURDAY TICKETS
        </a>
      </div>
    );
  }
}

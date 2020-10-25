import React, { Component } from "react";
import nvr2 from "../../images/nvr2.png";
import style from "./Home.module.css"

class Home extends Component {
  render() {
    return (
      <div className={style.home} id="home">
        <a href="https://ffm.to/4b-dope"  target="_blank">
          <img className={style.image} src={nvr2} />
        </a>
      </div>
    );
  }
}

export default Home;

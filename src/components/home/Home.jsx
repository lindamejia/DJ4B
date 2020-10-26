import React from "react";
import video from "../../images/going-nowhere.mp4";
import style from "./Home.module.css";

function Home() {
  return (
    <div className={style.home} id="home">
      <video
        className={style.video}
        autoPlay
        playsInline
        muted
        src={video}
        loop="loop"
      />

      <div className={style.Content}>
        <div className={style.SubContent}>
          <h1>GOING NOWHERE</h1>
          <p>ft. Trippie Redd</p>
          <a href="https://ffm.to/goingnowhere">
            <button type="button" className="btn btn-outline-dark">
              OUT NOW
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;

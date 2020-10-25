import React, { Component } from "react";
import style from "./Music.module.css";

export default class DoMore extends Component {
  render() {
    return (
      <div className={style.music} id="music">
        <div className={style.buttons}>
          <a
            className={style.musicLink}
            href="https://open.spotify.com/artist/0LIl9fjMPEZp8UDiL8Yuo4"
          >
            {" "}
            SPOTIFY
          </a>

          <a
            className={style.musicLink}
            href="https://music.apple.com/us/artist/4b/684157880"
          >
            {" "}
             MUSIC{" "}
          </a>

          <a
            className={style.musicLink}
            href="https://www.youtube.com/user/THEREALDJ4B/videos"
          >
            {" "}
            YOUTUBE{" "}
          </a>

          <a className={style.musicLink} href="https://soundcloud.com/dj4b">
            {" "}
            SOUNDCLOUD{" "}
          </a>
        </div>
        <iframe
          src="https://open.spotify.com/embed/artist/0LIl9fjMPEZp8UDiL8Yuo4"
          width="300"
          height="380"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      </div>
    );
  }
}

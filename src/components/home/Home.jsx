import React from "react";
import video from "../../images/6.mp4";
import thumb from "../../images/logo.png";
import style from "./Home.module.css";

const Home = (props) => {
  const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);
  const onLoadedData = () => {
    setIsVideoLoaded(true);
  };
  return (
    <div className={style.home} id="home">
      <img
        src={thumb}
        className={style.videoThumb}
        alt="thumb"
        style={{ opacity: isVideoLoaded ? 0 : 1 }}
      />
      <video
        autoPlay
        playsInline
        muted
        loop="loop"
        src={video}
        onLoadedData={onLoadedData}
        style={{ opacity: isVideoLoaded ? 1 : 0 }}
        className={style.video}
      />
    </div>
  );
};

export default Home;


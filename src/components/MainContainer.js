import React from "react";
import { useSelector } from "react-redux";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div className="p-3">
      <ButtonList />
      <div className={`video-container ${isMenuOpen ? "ml-0" : "ml-24"}`}>
        <VideoContainer />
      </div>
    </div>
  );
};

export default MainContainer;

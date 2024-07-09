import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
import { FaVideo } from "react-icons/fa";
import { MdOutlineLiveTv } from "react-icons/md";
import { IoMdMusicalNotes } from "react-icons/io";
import { MdSportsCricket } from "react-icons/md";
import { MdVideogameAsset } from "react-icons/md";
import { MdMovie } from "react-icons/md";
import { FaPodcast } from "react-icons/fa6";
import { GrUserManager } from "react-icons/gr";
import { MdOutlineScience } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;
  return (
    <div className="p-5 shadow-lg w-48">
      <div className="p-2">
        <Link className="flex gap-2">
          <FaHome className="mt-1" />
          <p to="/">Home</p>
        </Link>
        <div className="flex gap-2">
          <SiYoutubeshorts className="mt-1" />
          <p>Shorts</p>
        </div>
        <div className="flex gap-2">
          <FaVideo className="mt-1" />
          <p>Videos</p>
        </div>
        <div className="flex gap-2">
          <MdOutlineLiveTv className="mt-1" />
          <p>Live</p>
        </div>
      </div>
      <div className="p-2">
        <h1 className="font-bold pt-5 pb-2">Subscriptions</h1>
        <div className="flex gap-2">
          <IoMdMusicalNotes className="mt-1" />
          <p>Music</p>
        </div>
        <div className="flex gap-2">
          <MdSportsCricket className="mt-1" />
          <p>Sports</p>
        </div>
        <div className="flex gap-2">
          <MdVideogameAsset className="mt-1" />
          <p>Gaming</p>
        </div>
        <div className="flex gap-2">
          <MdMovie className="mt-1" />
          <p>Movies</p>
        </div>
      </div>
      <div className="p-2">
        <h1 className="font-bold pt-5 pb-2">Watch Later</h1>
        <div className="flex gap-2">
          <FaPodcast className="mt-1" />
          <p>Podcasts</p>
        </div>
        <div className="flex gap-2">
          <GrUserManager className="mt-1" />
          <p>Politics</p>
        </div>
        <div className="flex gap-2">
          <MdOutlineScience className="mt-1" />
          <p>Science</p>
        </div>
        <div className="flex gap-2">
          <GrTechnology className="mt-1" />
          <p>Technology</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

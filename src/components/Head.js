import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { cacheResults } from "../utils/searchSlice";
import { FiAlignJustify } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const BACKEND_PROXY_URL = "http://localhost:3001/search?q=";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(BACKEND_PROXY_URL + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 shadow-lg bg-blue-100">
      <div className="flex col-span-1">
        <FiAlignJustify
          onClick={() => toggleMenuHandler()}
          className="text-3xl text-blue-900 mt-1 cursor-pointer"
        />
        <a href="/">
          <h1 className="text-3xl ml-10 font-bold text-blue-700">
            Visio<span className="text-blue-900">Vibe</span>
          </h1>
        </a>
      </div>
      <div className="col-span-10 px-10 ml-52">
        <div>
          <input
            value={searchQuery}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            className="px-5 border border-blue-100 w-1/2 p-2 rounded-l-full bg-blue-50"
            type="text"
          />
          <button className="border border-blue-100 px-5 py-2 rounded-r-full bg-blue-200">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute bg-blue-50 py-2 px-5 w-[27rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((s) => (
                <li
                  key={s}
                  className="px-3 py-2 shadow-sm hover:bg-blue-100 position:fixed"
                >
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <FaUser className="text-3xl text-blue-900 mt-1" />
      </div>
    </div>
  );
};

export default Head;

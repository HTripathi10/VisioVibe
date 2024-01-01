import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';



const Head = () => {

  const [searchQuery , setSearchQuery] = useState("");
  const [suggestions , setSuggestions] = useState([]);
  const [showSuggestions,setShowSuggestions] = useState(false);

  const searchCache = useSelector(store => store.search);

  useEffect(() => {
    const timer = setTimeout( () => {
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery]);
      }else{
        getSearchSuggestions();
      }
    },200);

    return () => {
      clearTimeout(timer);
    };
  },[searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(cacheResults({
      [searchQuery]: json[1],
    }));
  }

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
      dispatch(toggleMenu());
  } 
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
      <div className='flex col-span-1'>
      <img onClick={() => toggleMenuHandler()} className='h-8 cursor-pointer' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8iICGSkZIkHyEPDA3z8vIyMTEhGx40MDEeHB4jICEeHR4AAAAxMTEgHh4gHB3W1tYtKyyXlpe6uroKBQhzcnJ+fX7CwsKysrJmZWX19fXk5OQYFhc5ODgoJidta2xUVFRfXV7Kysqsq6yjo6MHDa+eAAAB8UlEQVR4nO3c3VLaQBgGYJY/IQtE1Iogrfbn/q+xCaQ2TqtFm222+jwHDC8MMO8EdjnY+QYDAAAAAAAAAAAAAAAAeI/OL4Z5uDhP0m+yXYwzcbX4cJug4d045GN8Pem84GYd+67VUq6/dN7wou9Sjy1u0jQcjUZ9V2skaHhZfUuLbBrGYtN5w8F2HLNpGFOsNIPddlo3XGUgTK9T7BbVFzWbHX+zS1IQAAAAAAAAAABeZJKHVPXO76dHs9msul1OH+JfpOmr0ufuz15Wbhb78uzBvJzPWym2U/XU6Sk+lc6eTnEfv3Zf8PZjeTib2AihnYpwOJl5Qhp1kULY33d/1Pvbp9XTDcO/bhjGl503HD5uUX/Mn1PxTPr964pTUkhygra+hj9U16V10LS6+/pUtFLxTAo/00GCa1j/DhtFDw2Lxw1T/A7rtTRWS+ZhES2rdS3O22lep/qBX1LZSmetFI+pfvzk1HximrW03g9ns4edadboIy2XafbDWt9/Zhqp6gEAAAAAAAAAwAu89Zl7u+00xFXse2ZiLdHcxO24PLx7DpLMvrxcHy9f3+WOUswvHYZVRg2TTNktqnqjTCa0Jmm4WZcZNUwxC3pwd5VPwyLJlN3JdnHV9zD2RqKZ7G9/rj4AAAAAAAAAAAAAAAD8T74DVhZG6MsBqOQAAAAASUVORK5CYII=" alt="hamburger-menu"/>
      <a href="/">
        <img className='h-8 mx-4' src="data:image/png;base64,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" alt="youtube"/>
      </a>
      </div>
      <div className='col-span-10 px-10'>
        <div>
        <input value={searchQuery} onFocus={() => setShowSuggestions(true)} onBlur={() => setShowSuggestions(false)} onChange={(e) => setSearchQuery(e.target.value)} className='px-5 border border-gray-600 w-1/2 p-2 rounded-l-full' type='text'/>
        <button className='border border-gray-600 px-5 py-2 rounded-r-full bg-gray-100'>🔍</button>
        </div>
       {showSuggestions && <div className='absolute bg-white py-2 px-5 w-[31rem] shadow-lg rounded-lg border border-gray-100'>
        <ul>
          {suggestions.map((s) => (<li key={s} className='px-3 py-2 shadow-sm hover:bg-gray-100 position:fixed'>🔍 {s}</li>))}
        </ul>
       </div>}
      </div>
      <div className='col-span-1'>
        <img className='h-8' src="data:image/png;base64,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" alt="user"/>
      </div>
      
    </div>
  )
}

export default Head;
import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Games",
  "Movies",
  "Cricket",
  "Soccer",
  "Podcasts",
  "Songs",
  "Cartoon",
  "Religion",
  "Discovery",
  "Science",
  "Comedy",
  "Coding",
  "Politics",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((item, index) => (
        <Button key={index} name={item} />
      ))}
    </div>
  );
};

export default ButtonList;

import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="text-blue-900 border border-blue-500 font-semibold px-5 py-2 m-2 bg-blue-100 rounded-lg hover:bg-blue-200">
        {name}
      </button>
    </div>
  );
};

export default Button;

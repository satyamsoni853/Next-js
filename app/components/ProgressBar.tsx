import React from "react";

const ProgressBar = () => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 flex">
      <div
        className="bg-blue-500 h-2.5 rounded-l-full"
        style={{ width: "20%" }}
      ></div>
      <div
        className="bg-blue-400 h-2.5"
        style={{ width: "50%" }}
      ></div>
      <div
        className="bg-blue-300 h-2.5 rounded-r-full"
        style={{ width: "30%" }}
      ></div>
    </div>
  );
};

export default ProgressBar;
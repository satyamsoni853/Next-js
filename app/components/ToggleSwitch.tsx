"use client";
import React from "react";

const ToggleSwitch = ({ checked }: { checked: boolean }) => (
  <div
    className={`relative w-10 h-6 rounded-full transition-colors duration-200 ease-in-out ${
      checked ? "bg-blue-500" : "bg-gray-200"
    }`}
  >
    <div
      className={`absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-200 ease-in-out ${
        checked ? "translate-x-4" : ""
      }`}
    />
  </div>
);

export default ToggleSwitch;

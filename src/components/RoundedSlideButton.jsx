import React from "react";

const RoundedSlideButton = ({ children, className = "", ...props }) => (
  <button
    {...props}
    className={`group relative overflow-hidden rounded-full bg-indigo-600 px-8 py-2 font-semibold text-white transition-colors duration-300 hover:bg-indigo-700 focus:outline-none ${className}`}
    style={{ boxShadow: "0 2px 8px 0 rgba(80, 80, 200, 0.10)" }}
  >
    <span className="relative z-10">{children}</span>
    <span
      className="absolute left-0 top-0 h-full w-0 rounded-full bg-indigo-400 opacity-30 transition-all duration-300 group-hover:w-full"
      aria-hidden="true"
    />
  </button>
);

export default RoundedSlideButton; 
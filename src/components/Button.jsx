import React from "react";

export default function Button({
  children,
  type = "button",
  bgColor = "bg-blue-600",
  hoverBgColor = "hover:bg-blue-700",
  textColor = "text-white",
  hoverTextColor = "hover:text-gray-100",
  className = "",
  ...props
}) {
  return (
    <button
      type={type}
      className={`px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors ${bgColor} ${hoverBgColor} ${textColor} ${hoverTextColor} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

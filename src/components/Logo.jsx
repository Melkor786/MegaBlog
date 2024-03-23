import React from "react";

function Logo({ width = "100px" }) {
  return (
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqAPgklmi9Cwb4Djg9Tia7-o83NJ1qlP0iNQ&s"
      alt="Logo"
      style={{ width }}
    />
  );
}

export default Logo;

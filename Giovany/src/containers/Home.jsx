import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <nav>
        <Link to="/html">HTML</Link>
        <Link to="/css">CSS</Link>
        <Link to="/js">JS</Link>
      </nav>
    </div>
  );
};

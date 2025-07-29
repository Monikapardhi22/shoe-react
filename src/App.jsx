import React from "react";
import NavBar from "./NavBar";

import "./App.css";

import Content from "./Content";

export default function App() {
  return (
    <div className="body">
      {/* {" "} */}
      <div className="body_1">
        
        <div className="body_2">
          <div className="app">
            <NavBar />
            <Content />
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import Systems from "../systems/Systems";
import "./Menu.css";
import plantImg from "./plantan.png";
import group1 from "./Group.png";

export default function Menu() {
  const [showSystems, setShowSystems] = useState(false);

  function show() {
    showSystems ? setShowSystems(false) : setShowSystems(true);
  }
  return (
    <div className="menu-container">
      <img src={plantImg} alt="" />
      <div
        style={{ padding: "20px", display: "flex", flexDirection: "column" }}
      >
        <h3 style={{ marginBottom: "20px" }}>ReAqua</h3>
        <h3 className="h3-left" onClick={show}>
          Systems
        </h3>
        {showSystems && (
          <div
            style={{ width: "100%", display: "flex", justifyContent: "right" }}
          >
            <Systems />
          </div>
        )}
      </div>
      <img className="bottom-svg-img" src={group1} alt="" />
    </div>
  );
}

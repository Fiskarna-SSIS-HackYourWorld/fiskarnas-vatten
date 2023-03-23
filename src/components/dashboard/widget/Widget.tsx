import React, { useState } from "react";
import "./Widget.css";
import { Line } from "react-chartjs-2";

interface IWidget{
  Title: string,
  Info: string,
  Unit: string
}

export default function Widget(props : IWidget) {
  return (
    <div className="container">
      <h2>{props.Title}:</h2>
      <div className="main-content">
        <div style={{width:"70px"}}>
          <div>{props.Info}</div>
          <div>{props.Unit}</div>
        </div>
        <div>
          för i helvete
        </div>
      </div>

    </div>
  );
}

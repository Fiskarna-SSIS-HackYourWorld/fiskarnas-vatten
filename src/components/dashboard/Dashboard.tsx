import React from "react";
import "./Dashboard.css";
import WidgetContainer from "./widget/WidgetContainer";
import topLeftGroup from './topLeftGroup.png';
import bottomRightGroup from './bottomRightGroup.png'

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <img className="top-left-group" src={topLeftGroup} alt="" />
      <img className="bottom-right-group" src={bottomRightGroup} alt="" />
      <WidgetContainer />
    </div>
  );
}
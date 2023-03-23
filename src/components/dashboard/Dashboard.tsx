import React from "react";
import "./Dashboard.css";
import WidgetContainer from "./widget/WidgetContainer";
export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <WidgetContainer />
    </div>
  );
}

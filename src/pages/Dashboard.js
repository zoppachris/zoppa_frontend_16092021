import React from "react";
import { useEffect } from "react";

const Dashboard = (props) => {
  useEffect(() => {
    document.title = props.name;
  }, [props.name]);

  return (
    <div className="page">
      <h1>Dashboard Page</h1>
    </div>
  );
}

export default Dashboard;

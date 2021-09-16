import React from "react";
import { useEffect } from "react";

const EditUser = (props) => {
  useEffect(() => {
    document.title = props.name;
  }, [props.name]);

  return (
    <div className="page">
      <h1>Edit User</h1>
    </div>
  );
};

export default EditUser;

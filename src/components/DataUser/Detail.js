import React from "react";

const Detail = (data) => {
  return (
    <div
      style={{
        padding: "30px 0px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div>
          <h3>First Name :</h3>
          <h4>{data.data.first_name}</h4>
        </div>
        <div>
          <h3>Last Name :</h3>
          <h4>{data.data.last_name}</h4>
        </div>
        <div>
          <h3>ID :</h3>
          <h4>{data.data.id}</h4>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div>
          <h3>Email :</h3>
          <h4>{data.data.email}</h4>
        </div>
        <div>
          <h3>Avatar :</h3>
          <img alt="avatar" src={data.data.avatar} />
        </div>
      </div>
    </div>
  );
};

export default Detail;

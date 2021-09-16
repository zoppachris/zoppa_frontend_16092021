import { Container, IconButton, Tooltip } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const CreateUser = (props) => {
  useEffect(() => {
    document.title = props.name;
  }, [props.name]);

  return (
    <div className="page">
      <Container>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Tooltip title="Back">
            <Link to={`/data-user`}>
              <IconButton>
                <ArrowBack />
              </IconButton>
            </Link>
          </Tooltip>
          <h1>Create User</h1>
        </div>
      </Container>
    </div>
  );
};

export default CreateUser;

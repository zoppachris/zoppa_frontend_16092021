import { Container, Button, CircularProgress } from "@material-ui/core";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Table from "../../components/Table";
import { connect, useDispatch } from "react-redux";
import { clearUsersDetail, getUsersList } from "../../redux/actions/usersAction";

const DataUser = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = props.name;
    dispatch(getUsersList());
    dispatch(clearUsersDetail());
  }, [props.name, dispatch]);

  return (
    <div className="page">
      <h1>Data User</h1>
      <Container>
        {props.getUsersList ? (
          <>
            {" "}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                margin: 10,
              }}
            >
              <Link to={`data-user/create`}>
                <Button variant="contained">Create</Button>
              </Link>
            </div>
            <Table data={props.getUsersList} />
          </>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {props.errorUsersList ? props.errorUsersList : <CircularProgress />}
          </div>
        )}
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    getUsersList: state.users.getUsersList,
    errorUsersList: state.users.errorUsersList,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DataUser);

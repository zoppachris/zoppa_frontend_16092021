import {
  CircularProgress,
  Container,
  IconButton,
  Tooltip,
} from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import React from "react";
import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getUsersDetail } from "../../redux/actions/usersAction";
import Detail from "../../components/DataUser/Detail";

const DetailUser = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = props.name;
    dispatch(getUsersDetail(props.match.params.id));
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
          <h1>Detail User</h1>
        </div>
        <div>
          {props.getUsersDetail ? (
            <Detail data={props.getUsersDetail.data} />
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {props.errorUsersDetail ? (
                props.errorUsersDetail
              ) : (
                <CircularProgress />
              )}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    getUsersDetail: state.users.getUsersDetail,
    errorUsersDetail: state.users.errorUsersDetail,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DetailUser);

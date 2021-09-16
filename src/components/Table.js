import { IconButton, Tooltip } from "@material-ui/core";
import { Delete, Edit, Info } from "@material-ui/icons";
import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";

const Table = ({ data }) => {
  const columns = [
    {
      dataField: "id",
      text: "ID",
      align: "center",
      headerAlign: "center",
      headerStyle: () => {
        return { width: "5%" };
      },
    },
    {
      dataField: "avatar",
      text: "Avatar",
      align: "center",
      headerAlign: "center",
      formatter: (rowContent, row) => {
        return (
          <div>
            <img alt="avatar" src={rowContent} />
          </div>
        );
      },
    },
    {
      dataField: "email",
      text: "Email",
      align: "center",
      headerAlign: "center",
    },
    {
      dataField: "first_name",
      text: "First Name",
      align: "center",
      headerAlign: "center",
    },
    {
      dataField: "last_name",
      text: "Last Name",
      align: "center",
      headerAlign: "center",
    },
    {
      datafield: "link",
      text: "Action",
      align: "center",
      headerAlign: "center",
      formatter: (rowContent, row) => {
        return (
          <div>
            <Tooltip title="Detail">
              <Link to={`data-user/detail/${row.id}`}>
                <IconButton>
                  <Info />
                </IconButton>
              </Link>
            </Tooltip>
            <Tooltip title="Edit">
              <Link to={`data-user/edit/${row.id}`}>
                <IconButton>
                  <Edit />
                </IconButton>
              </Link>
            </Tooltip>
            <Tooltip title="Delete">
              <IconButton>
                <Delete />
              </IconButton>
            </Tooltip>
          </div>
        );
      },
    },
  ];

  const options = {
    onSizePerPageChange: (sizePerPage, page) => {
      console.log("Size per page change!!!");
      console.log("Newest size per page:" + sizePerPage);
      console.log("Newest page:" + page);
    },
    onPageChange: (page, sizePerPage) => {
      console.log("Page change!!!");
      console.log("Newest size per page:" + sizePerPage);
      console.log("Newest page:" + page);
    },
  };

  return (
    <div>
      <BootstrapTable
        keyField="id"
        data={data.data}
        columns={columns}
        noDataIndication="Table is Empty"
        pagination={paginationFactory(options)}
        striped
      />
    </div>
  );
};

export default Table;

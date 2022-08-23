import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import icon_edit from "../../assets/icon-edit.svg";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import { data } from "../../data/data";

/**
 * Displays table of user's transactions on the user page
 * @returns {JSX}
 */
const TransactionTable = () => {
  const columns = [
    {
      dataField: "date",
      text: "DATE",
    },
    {
      dataField: "description",
      text: "DESCRIPTION",
    },
    {
      dataField: "amount",
      text: "AMOUNT",
    },
    {
      dataField: "balance",
      text: "BALANCE",
    },
  ];

  const expandRow = {
    renderer: (row) => (
      <div className="row-expand-info">
        <p>{`Details: ${row.description}-${row.amount}`}</p>
        <p contentEditable="true">
          {row.child[0].type}
          <img src={icon_edit} alt="Edit"></img>
        </p>
        <p contentEditable="true">
          {row.child[0].note}
          <img src={icon_edit} alt="Edit"></img>
        </p>
      </div>
    ),
    showExpandColumn: true,
    expandByColumnOnly: true,
  };

  return <BootstrapTable keyField="id" data={data} columns={columns} expandRow={expandRow} />;
};
export default TransactionTable;

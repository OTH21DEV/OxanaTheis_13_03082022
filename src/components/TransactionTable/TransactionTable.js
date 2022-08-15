import React, { useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import icon_edit from "../../assets/icon-edit.svg";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

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

  const data = [
    {
      id: "1",
      date: "June 20th, 2020",
      description: "Golden Sun Bakery",
      amount: "$128.00",
      balance: "$2082.79",
      child: [
        {
          type: "Transaction Type: Electronic",
          category: "Category: Food",
          note: "Notes:",
        },
      ],
    },
    {
      id: "2",
      date: "June 20th, 2020",
      description: "Golden Sun Bakery",
      amount: "$55.00",
      balance: "$2082.79",
      child: [
        {
          type: "Transaction Type: Electronic",
          category: "Category: Sport",
          note: "Notes:",
        },
      ],
    },
    {
      id: "3",
      date: "June 20th, 2020",
      description: "Golden Sun Bakery",
      amount: "$120.00",
      balance: "$2082.79",
      child: [
        {
          type: "Transaction Type: Electronic",
          category: "Category: Tax",
          note: "Notes:",
        },
      ],
    },
    {
      id: "4",
      date: "June 20th, 2020",
      description: "Golden Sun Bakery",
      amount: "$1000.00",
      balance: "$2082.79",
      child: [
        {
          type: "Transaction Type: Electronic",
          category: "Category: Entertainment",
          note: "Notes:",
        },
      ],
    },
    {
      id: "5",
      date: "June 20th, 2020",
      description: "Golden Sun Bakery",
      amount: "$30.00",
      balance: "$2082.79",
      child: [
        {
          type: "Transaction Type: Electronic",
          category: "Category: Sport",
          note: "Notes:",
        },
      ],
    },
    {
      id: "6",
      date: "June 20th, 2020",
      description: "Golden Sun Bakery",
      amount: "$120.00",
      balance: "$2082.79",
      child: [
        {
          type: "Transaction Type: Electronic",
          category: "Category: Food",
          note: "Notes:",
        },
      ],
    },
  ];

  //const [isClicked, setIsClicked]=useState(true)

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

  return (
    <BootstrapTable
      keyField="id"
      data={data}
      columns={columns}
      expandRow={expandRow}
   
    />
  );
};
export default TransactionTable;

/*

const bodyTable =
 dataTable.map((item) => {
    return (
      <tr data-id={item.id}>
        <td>
          <img className="arrow" data-id={item.id} src={icon_chevron} alt="Icon" onClick={(e) =>handleArrow(e)}></img>
        </td>
        <td>{item.date}</td>
        <td>{item.description}</td>
        <td>{item.amount}</td>
        <td>{item.balance}</td>
      </tr>

      
    );
  })
*/

/*
  return (
    <table className="table">
      <thead>
        <tr>
          <th></th>
          <th>DATE</th>
          <th>DESCRIPTION</th>
          <th>AMOUNT</th>
          <th>BALANCE</th>
        </tr>
      </thead>
      <tbody>{bodyTable}</tbody>
    </table>
  );
  */

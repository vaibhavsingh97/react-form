import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css";

function onInsertRow(row) {
  let newRowStr = "";

  for (const prop in row) {
    newRowStr += prop + ": " + row[prop] + " \n";
  }
}

function categoryNameValidator(value) {
  const response = {
    isValid: true,
    notification: { type: "success", msg: "", title: "" }
  };
  if (!value) {
    response.isValid = false;
    response.notification.type = "error";
    response.notification.msg = "Value must be inserted";
    response.notification.title = "Requested Value";
  } else if (value.length < 10) {
    response.isValid = false;
    response.notification.type = "error";
    response.notification.msg = "Value must have 10+ characters";
    response.notification.title = "Invalid Value";
  }
  return response;
}

class Table extends Component {
  render() {
    const cellEditProp = {
      mode: "click",
      nonEditableRows: function() {
        return [0];
      }
    };

    const options = {
      afterInsertRow: onInsertRow,
      clearSearch: true
    };

    // To delete rows you be able to select rows
    const selectRowProp = {
      mode: "checkbox",
      clickToSelect: true,
      selected: [0],
      bgColor: "gold",
      showOnlySelected: true
    };

    return (
      <div>
        <BootstrapTable
          version="4"
          data={this.props.data}
          insertRow={true}
          deleteRow={true}
          selectRow={selectRowProp}
          options={options}
          cellEdit={cellEditProp}
          search={true}
          exportCSV={true}
        >
          <TableHeaderColumn isKey dataField="id">
            ID
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="category"
            editable={{ type: "text", validator: categoryNameValidator }}
          >
            Category
          </TableHeaderColumn>
          <TableHeaderColumn dataField="price">Price</TableHeaderColumn>
          <TableHeaderColumn dataField="qty">Quantity</TableHeaderColumn>
          <TableHeaderColumn dataField="name">Name</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default Table;

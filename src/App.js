import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Table from "./components/Table";

var data = [
  {
    id: 1,
    category: "Sporting Goods",
    price: "49.99",
    qty: 12,
    name: "Football"
  },
  {
    id: 2,
    category: "Sporting Goods",
    price: "9.99",
    qty: 15,
    name: "Baseball"
  },
  {
    id: 3,
    category: "Sporting Goods",
    price: "29.99",
    qty: 14,
    name: "Basketball"
  },
  {
    id: 4,
    category: "Electronics",
    price: "99.99",
    qty: 34,
    name: "iPod Touch"
  },
  {
    id: 5,
    category: "Electronics",
    price: "399.99",
    qty: 12,
    name: "iPhone 5"
  },
  {
    id: 6,
    category: "Electronics",
    price: "199.99",
    qty: 23,
    name: "Nexu 7"
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="Table-header">
          <Table data={data} />
        </p>
      </div>
    );
  }
}

export default App;

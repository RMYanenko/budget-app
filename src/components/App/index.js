import { Component } from "react";

import Balance from "../Balance";
import Transactions from "../Transactions";
import Form from "../Form";

let id = 0;
class App extends Component {
  constructor() {
    super();

    this.state = {
      balance: 0,
      transactions: [],
    };

    console.log("constructor");
  }

  onChange = (value) => {
    this.setState((state) => ({
      balance: state.balance + Number(value),
      transactions: [{ value, label: "change" }, ...state.transactions],
    }));
  };

  render() {
    console.log("render");
    return (
      <div className="container">
        <Balance balance={this.state.balance}>Баланс:</Balance>
        <Form onChange={this.onChange} />
        <hr />
        <Transactions transactions={this.state.transactions} />
      </div>
    );
  }
}

export default App;

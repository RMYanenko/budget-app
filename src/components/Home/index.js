import { Component } from "react";
import PropTypes from "prop-types";

import Balance from "../Balance";
import Transactions from "../Transactions";
import Form from "../Form";

import { Wrapper } from "./styles";

let id = 0;
class Home extends Component {
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
      transactions: [
        { value, label: "change", id: ++id },
        ...state.transactions,
      ],
    }));
  };

  render() {
    console.log("render");
    return (
      <Wrapper>
        <Balance balance={this.state.balance}>Баланс:</Balance>
        <Form onChange={this.onChange} />
        <hr />
        <Transactions transactions={this.state.transactions} />
      </Wrapper>
    );
  }
}

Form.propTypes = {
  onChange: PropTypes.func,
};
export default Home;

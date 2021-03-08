import { Component } from "react";
import PropTypes from "prop-types";

import Balance from "../Balance";
import Transactions from "../Transactions";
import Form from "../Form";
import ErrorBoundary from "../ErrorBoundary";

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

  onChange = ({value, date, comment}) => {
    this.setState((state) => ({
      balance: state.balance + Number(value),
      transactions: [{
        value: +value,
        comment,
        date,
        id: ++id
       },
        ...state.transactions,
      ],
    }));
  };

  render() {
    console.log("render");
    return (
      <ErrorBoundary>
        <Wrapper>
          <Balance balance={this.state.balance}>Баланс:</Balance>
          <Form onChange={this.onChange} />
          <hr />
          <Transactions transactions={this.state.transactions} />
        </Wrapper>
      </ErrorBoundary>
    );
  }
}

Form.propTypes = {
  onChange: PropTypes.func,
};
export default Home;

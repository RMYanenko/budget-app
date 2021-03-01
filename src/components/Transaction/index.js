import PropTypes from "prop-types";

import { Wrapper } from "./styles";

const Transaction = ({ transaction: {value, label} }) => {
  return (
    <Wrapper
      value={value}
      //передам значення для tyled-components
    >
      Label: {label}
      <p>Value: {value}</p>
    </Wrapper>
  );
};

Transaction.prototype = {
  transaction: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.number,
  }),
};

Transaction.defaultProps = {
  transaction: { label: "", value: 0 },
};

export default Transaction;

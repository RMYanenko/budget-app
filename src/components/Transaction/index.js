const Transaction = ({transaction}) => {
  return (
    <div>
      Label: {transaction.label}
      <p>Value: {transaction.value}</p>
    </div>
  );
};

export default Transaction;

import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({value}) => value < 0 ? '#ff8b8b' : '#bdebf5'};
  border-color: #dbdbdb;
  padding: 5px 10px;
  border: 1px solid #000;
  margin-bottom: 5px;
  border-radius: 3px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  -ms-border-radius: 3px;
  -o-border-radius: 3px;
`;
Wrapper.displayName = "TransactionWrapper";

export const TransactionDate = styled.div`
  flex-grow: 1;
`
TransactionDate.displayName = "TransactionDate";

export const Value = styled.div`
  flex-grow: 1;
`
Value.displayName = "Value";


export const Comment = styled.div`
  flex-grow: 2;
`
Comment.displayName = "Comment";
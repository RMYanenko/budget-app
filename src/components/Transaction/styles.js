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
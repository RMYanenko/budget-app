import styled from "styled-components";

export const Wrapper = styled.div`
  background: #fff;
  border: 1px solid #bdbdbd;
  border-radius: 3px;
  padding: 5px;
  margin-bottom: 10px;
`;

Wrapper.displayName = "Wrapper";

export const Input = styled.input`
  border-radius: 3px;
  padding: 0 5px;
  height: 40px;
  min-width: 80px;
  margin-bottom: 3px;
  margin-right: 10px;
  border: 1px solid #bdbdbd;
  outline: none;
`;
Input.displayName = "Input";

export const Row = styled.div`
  display: flex;
  align-items: center;
`;

Row.displayName = "Row";

export const Button = styled.button`
  border: 1px solid #bdbdbd;
  height: 40px;
  border-radius: 3px;
  box-sizing: border-box;
  background-color: #e0e0e0;
  color: rgba(0, 0, 0, 0.87);
  font-size: 18px;
  margin-right: 10px;
  outline: none;
  width: 120px;

  &: hover {
    cursor: pointer;
  }
`;

Button.displayName = "Button";

export const Comment = styled.textarea`
  min-height: 40px;
  line-height: 1.5;
  padding: 5px;
  box-sizing: border-box;
  border-radius: 3px;
  margin-bottom: 3px;
  margin-right: 10px;
  height: 40px;
  width: 150px;
  min-width: 140px;
  border: 1px solid #bdbdbd;
  outline: none;
`;

Comment.displayName = "Comment";

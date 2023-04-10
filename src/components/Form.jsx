import React from "react";
import styled from "@emotion/styled";

const InputSubmit = styled.input`
  background-color: #66a2fe;
  border: none;
  width: 100%;
  padding: 10px;
  text-transform: uppercase;
  font-weight: bold;
  color: #fff;
  font-size: 20px;
  border-radius: 10px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;
export const Form = () => {
  return (
    <Form>
      <input type="submit" value="Cotizar" />
    </Form>
  );
};

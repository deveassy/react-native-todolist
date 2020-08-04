import React from "react";
import styled from "styled-components";

export default function Modal() {
  return (
    <Container>
      <ModalTextInput placeholder="What is going To Do Today?" />
    </Container>
  );
}
const Container = styled.View`
  justify-content: flex-end;
  padding: 10px;
  background-color: #fff;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;
const ModalTextInput = styled.TextInput`
  align-items: center;
  justify-content: flex-end;
  height: 20px;
`;

import React from "react";
import styled from "styled-components";

export default function App() {
  return (
    <Container>
      <Header>Today's ToDoList</Header>
      <Content>오늘의 할일은 이것입니당</Content>
      <ModalInput>What is going to Do?</ModalInput>
    </Container>
  );
}

const Container = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #222;
`;
const Header = styled.View`
  margin: 20px;
  color: #f3c623;
`;
const Content = styled.Text`
  color: #fff;
`;

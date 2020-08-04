import React from "react";
import styled from "styled-components";

import Header from "./components/Header";
import ListItem from "./components/ListItem";
import Modal from "./components/Modal";

export default function App() {
  return (
    <Container>
      <Header />
      <ListItem title="오늘 할일이래요" />
      <ListItem title="이건 내일 할일이에요" />
      <Modal />
    </Container>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #222;
`;

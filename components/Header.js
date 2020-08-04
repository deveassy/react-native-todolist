import React from "react";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";

export default function Header() {
  return (
    <Container>
      <HeaderText>Today's ToDoList</HeaderText>
      <AddButton activeOpacity={0.8}>
        <Ionicons name="ios-add" color="#f3c623" size={24} />
      </AddButton>
    </Container>
  );
}
const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin: 25px 0 40px 10px;
`;
const HeaderText = styled.Text`
  font-size: 35px;
  font-weight: 600;
  color: #f3c623;
`;
const AddButton = styled.TouchableOpacity`
  align-items: center;
  width: 30px;
  height: 30px;
  margin-left: 25px;
  border: 2px solid #f3c623;
  border-radius: 15px;
`;

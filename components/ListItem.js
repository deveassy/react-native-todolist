import React from "react";
import styled from "styled-components";
import { FontAwesome } from "@expo/vector-icons";

export default function ListItem({ title }) {
  return (
    <Container>
      <CheckStatus>
        <FontAwesome name="check" color="#f3c623" size={13} />
      </CheckStatus>
      <ItemContent>{title}</ItemContent>
    </Container>
  );
}
const Container = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #777;
`;
const CheckStatus = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  margin-left: 30px;
  border: 1px solid #888;
  border-radius: 13px;
`;
const ItemContent = styled.Text`
  margin-left: 15px;
  font-size: 18px;
  color: #fff;
`;

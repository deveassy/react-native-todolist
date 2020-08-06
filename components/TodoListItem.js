import React from "react";
import styled from "styled-components";
import { FontAwesome } from "@expo/vector-icons";
import Swipeable from "react-native-gesture-handler/Swipeable";

export default function TodoListItem({ title, id, onRemove }) {
  const DeleteButton = ({ onPress }) => {
    return (
      <DeleteContainer activeOpacity={0.8} onPress={onPress}>
        <DeleteText>삭제</DeleteText>
      </DeleteContainer>
    );
  };
  return (
    <Swipeable
      renderRightActions={() => <DeleteButton onPress={onRemove(id)} />}
    >
      <Container>
        <CheckStatus>
          <FontAwesome name="check" color="#000" size={13} />
        </CheckStatus>
        <ItemContent>{title}</ItemContent>
      </Container>
    </Swipeable>
  );
}
const Container = styled.View`
  flex-direction: row;
  padding: 10px;
`;

const CheckStatus = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  background-color: #f3c623;
  border: 1px solid transparent;
  border-radius: 13px;
`;

const ItemContent = styled.Text`
  align-items: center;
  margin-left: 15px;
  font-size: 18px;
  color: #fff;
`;

const DeleteContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding: 4px;
  margin: 1px;
  background-color: #fe5746;
`;
const DeleteText = styled.Text`
  margin: 10px;
  color: #fff;
`;

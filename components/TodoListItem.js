import React from "react";
import styled from "styled-components";
import { FontAwesome } from "@expo/vector-icons";
import Swipeable from "react-native-gesture-handler/Swipeable";

export default function TodoListItem({
  title,
  id,
  checked,
  onRemove,
  onToggle,
}) {
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
        <CheckStatus onPressOut={onToggle(id)}>
          {checked ? (
            <Check>
              <FontAwesome name="check" color="#000" size={13} />
            </Check>
          ) : (
            <Uncheck />
          )}
        </CheckStatus>
        <ItemContent style={checked ? { color: "#444" } : { color: "#fff" }}>
          {title}
        </ItemContent>
      </Container>
    </Swipeable>
  );
}
const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px;
  margin-right: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #888;
`;

const CheckStatus = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

const ItemContent = styled.Text`
  margin-left: 15px;
  font-size: 18px;
`;

const DeleteContainer = styled.TouchableOpacity`
  padding: 4px;
  margin: 1px;
  background-color: #fe5746;
`;
const DeleteText = styled.Text`
  margin: 10px;
  color: #fff;
`;

const Check = styled.View`
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  background-color: #f3c623;
  border: 1px solid transparent;
  border-radius: 13px;
`;
const Uncheck = styled.View`
  width: 25px;
  height: 25px;
  border: 1px solid #888;
  border-radius: 13px;
`;

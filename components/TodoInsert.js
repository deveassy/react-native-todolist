import React, { useState } from "react";
import styled from "styled-components";
import { AntDesign } from "@expo/vector-icons";

export default function TodoInsert({ onAddItem }) {
  const [newTodoItem, setNewTodoItem] = useState("");
  const ItemInputHandler = (newTodo) => {
    setNewTodoItem(newTodo);
  };

  const addItemHandler = () => {
    onAddItem(newTodoItem);
    setNewTodoItem("");
  };
  return (
    <Container>
      <ModalTextInput
        autoCorrect={false}
        onChangeText={ItemInputHandler}
        value={newTodoItem}
        placeholder="Hey, What is going To Do Today?"
        placeholderTextColor={"#888"}
        style={{ fontStyle: "italic" }}
        keyboardAppearance="dark"
        returnKeyType="done"
      />
      <AddButton activeOpacity={0.8} onPress={addItemHandler}>
        <AntDesign name="downcircleo" color="#f3c623" size={28} />
      </AddButton>
    </Container>
  );
}
const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 10px 30px;
  border-bottom-width: 2px;
  border-color: #f4ea8e;
`;
const ModalTextInput = styled.TextInput`
  align-items: center;
  width: 100%;
  height: 20px;
  padding-right: 15px;
  font-size: 17px;
  color: #fff;
`;
const AddButton = styled.TouchableOpacity`
  align-items: center;
  margin-left: -20px;
`;

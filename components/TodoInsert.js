import React, { useState } from "react";
import styled from "styled-components";
import { AntDesign } from "@expo/vector-icons";
// import Modal from "react-native-modal";

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
        // onAddItem={onAddItem}
        onChangeText={ItemInputHandler}
        value={newTodoItem}
        placeholder="What is going To Do Today?"
        placeholderTextColor={"#888"}
        keyboardAppearance="dark"
      />
      <AddButton activeOpacity={0.8} onPress={addItemHandler}>
        <AntDesign name="upcircleo" color="#f3c623" size={28} />
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
  justify-content: flex-end;
  width: 100%;
  height: 20px;
  font-size: 17px;
  color: #fff;
`;
const AddButton = styled.TouchableOpacity`
  align-items: center;
  margin-left: -20px;
`;

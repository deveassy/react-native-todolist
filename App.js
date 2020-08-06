import React, { useState } from "react";
import { View } from "react-native";
import styled from "styled-components";

import TodoList from "./components/TodoList";
// import TodoListItem from "./components/TodoListItem";
import TodoInsert from "./components/TodoInsert";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addItem = (text) => {
    setTodos([
      ...todos,
      { id: Math.random().toString(), title: text, checked: false },
    ]);
  };

  const onRemove = (id) => (e) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <Container>
      <HeaderText>Today's ToDoList</HeaderText>
      <HeaderLine />
      <View>
        <TodoList todos={todos} onRemove={onRemove} />
        <TodoInsert onAddItem={addItem} />
      </View>
    </Container>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #222;
`;
const HeaderText = styled.Text`
  margin: 25px 0 5px 25px;
  font-size: 35px;
  font-weight: 600;
  color: #f3c623;
`;
const HeaderLine = styled.View`
  width: 300px;
  height: 5px;
  margin: 0 0 25px 70px;
  background-color: #838383;
`;

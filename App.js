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

  const onToggle = (id) => (e) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };
  return (
    <Container>
      <HeaderText>Today's ToDoList</HeaderText>
      <View>
        <TodoInsert onAddItem={addItem} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
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

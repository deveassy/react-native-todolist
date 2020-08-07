import React from "react";
import styled from "styled-components";
import TodoListItem from "./TodoListItem";

export default function TodoList({ todos, onRemove, onToggle }) {
  return (
    <Container keyboardShouldPersistTaps="handled">
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          {...todo}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </Container>
  );
}
const Container = styled.ScrollView`
  margin-left: 20px;
  height: 460px;
`;

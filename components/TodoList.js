import React from "react";
import styled from "styled-components";
import TodoListItem from "./TodoListItem";

export default function TodoList({ todos, onRemove }) {
  return (
    <Container keyboardShouldPersistTaps="handled">
      {todos.map((todo) => (
        <TodoListItem key={todo.id} {...todo} onRemove={onRemove} />
      ))}
    </Container>
  );
}
const Container = styled.ScrollView`
  margin: 0 20px;
  height: 460px;
`;

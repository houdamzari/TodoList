import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

function TodosList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const completeTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        // eslint-disable-next-line no-param-reassign
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removedArr);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos((prev) => prev.map((item) => (item.id === todoId ? newValue : item)));
  };
  return (
    <>
      <h1>What is the plan for today</h1>
      <TodoForm onSubmit={addTodo} />
      <TodoItem
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default TodosList;

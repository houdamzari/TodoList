/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import TodoForm from './TodoForm';

export default function TodoItem({
  todos,
  completeTodo,
  removeTodo,
  updateTodo,
}) {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  });

  const submitUpdatedValue = (data) => {
    updateTodo(edit.id, data);
    setEdit({
      id: null,
      value: '',
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdatedValue} />;
  }
  return todos.map((todo, i) => (
    <div
      className={todo.isComplete ? 'todo__row complete' : 'todo__row'}
      key={i}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className="delete__icon"
        />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit__icon"
        />
      </div>
    </div>
  ));
}

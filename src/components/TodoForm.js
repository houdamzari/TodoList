import React, { useState, useEffect, useRef } from 'react';

export default function TodoForm({ onSubmit }) {
  const [input, setInput] = useState('');
  const focusRef = useRef(null);
  useEffect(() => {
    focusRef.current.focus();
  });
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput('');
  };

  return (
    <form className="todo__form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a task"
        value={input}
        name="text"
        className="todo__input"
        onChange={handleChange}
        ref={focusRef}
      />
      <button className="todo__button" type="submit">
        Add
      </button>
    </form>
  );
}

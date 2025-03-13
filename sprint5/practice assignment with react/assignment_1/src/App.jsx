import React from 'react';
import AddTodo from './addTodod';
import TodoList from './todoList';
import Filter from './filter';

const App = () => {
  return (
    <div>
      <h1>Todo App</h1>
      <AddTodo />
      <Filter />
      <TodoList />
    </div>
  );
};

export default App;

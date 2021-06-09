import React, { useState } from 'react';

import ToDoList from './components/ToDoList';
import NewToDo from './components/NewToDo';
import { Todo } from './models/todo.model';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addToDoHandler = (text: string) => {
    setTodos(prevTodos => [
      ...prevTodos,
      { id: Math.random().toString(), text: text },
    ]);
  };

  const deleteTodoHandler = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId);
    });
  };

  return (
    <div className='App'>
      <NewToDo onAddTodo={addToDoHandler} />
      <ToDoList items={todos} onDeleteTodo={deleteTodoHandler} />
    </div>
  );
};

export default App;

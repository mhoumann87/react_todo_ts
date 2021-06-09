import React from 'react';

// Interface for a todo
interface ToDoListProps {
  items: { id: string; text: string }[];
}

const ToDoList: React.FunctionComponent<ToDoListProps> = props => {
  return (
    <ul>
      {props.items.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};

export default ToDoList;

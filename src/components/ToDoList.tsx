import React from 'react';

// Interface for a todo
interface ToDoListProps {
  items: { id: string; text: string }[];
  onDeleteTodo: (id: string) => void;
}

const ToDoList: React.FunctionComponent<ToDoListProps> = props => {
  return (
    <ul>
      {props.items.map(todo => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={props.onDeleteTodo.bind(null, todo.id)}>
            Delete Item
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;

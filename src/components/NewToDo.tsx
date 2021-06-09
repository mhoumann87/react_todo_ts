import React, { useRef } from 'react';

// type for addTodo
type NewToDoProps = {
  onAddTodo: (toDoText: string) => void;
};

const NewToDo: React.FunctionComponent<NewToDoProps> = props => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = textInputRef.current!.value;
    props.onAddTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor='todo-text'>Add ToDo Item</label>
        <input type='text' name='todo-text' ref={textInputRef} />
      </div>
      <button type='submit'>Add ToDo</button>
    </form>
  );
};

export default NewToDo;

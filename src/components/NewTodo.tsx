import React, { useRef } from "react";
import "./NewTodo.css";
type newTodoProps = {
  onTodoHandler: (value: string) => void;
};
const NewTodo: React.FC<newTodoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);
  const onSubmitFormHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const newtodo = textInputRef.current!.value;
    props.onTodoHandler(newtodo);
  };
  return (
    <form onSubmit={onSubmitFormHandler}>
      <div className="form-control">
        <label htmlFor="todo_new">Todo Text</label>
        <input type="text" id="todo_new" ref={textInputRef} />
      </div>
      <button type="submit">Add TODO</button>
    </form>
  );
};

export default NewTodo;

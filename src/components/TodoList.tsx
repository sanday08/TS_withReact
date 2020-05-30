import React from "react";
import "./TodoList.css";

interface TodoListProps {
  items: { id: string; text: string }[];
  deleteTodo: (id: string) => void;
}
const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <div>
      <ul>
        {props.items.map((item) => (
          <li key={item.id}>
            <span> {item.text}</span>
            <button
              type="button"
              onClick={() => {
                props.deleteTodo(item.id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

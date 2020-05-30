import React, { useState } from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { todoListType } from "./components/Types";
const App: React.FC = () => {
  const [items, setItems] = useState<todoListType[]>([
    { id: "1", text: "Fillup Petrol" },
    { id: "2", text: "Attend Engagement Ceremony" },
  ]);

  const deleteTodo = (id: string) => {
    setItems((prevState) => {
      return prevState.filter((item) => item.id !== id);
    });
  };

  const AddtodoHandler = (value: string) => {
    setItems((prevState) => [
      ...prevState,
      { id: Math.random().toString(), text: value },
    ]);
  };
  return (
    <div>
      <NewTodo onTodoHandler={AddtodoHandler} />
      <TodoList items={items} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;

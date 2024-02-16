import { useState } from "react";
import Form from "./Form";
import TodoItem from "./TodoItem";
import style from "./todolist.module.css";

export default function TodoList({ todos, setTodos }) {
  //   const [todos, setTodos] = useState([]);
  return (
    <div className={style.list}>
      {todos.map((item) => (
        // <h3>{item}</h3>
        <TodoItem key={item} item={item} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
}

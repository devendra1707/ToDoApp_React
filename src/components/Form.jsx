import { useState } from "react";
import style from "./form.module.css";
export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState("");
  //   const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    // console.log(todos);
    setTodo("");
  }

  return (
    <form onSubmit={handleSubmit} className={style.todoform}>
      <div className={style.inputContainer}>
        <input
          className={style.modernInput}
          type="text"
          value={todo}
          //   key={todo}
          placeholder="Enter Todo Item ..."
          onChange={(e) => setTodo(e.target.value)}
        />

        <button type="submit" className={style.submitButton}>
          Add
        </button>
      </div>
    </form>
  );
}

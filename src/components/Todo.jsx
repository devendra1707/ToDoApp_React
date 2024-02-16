import { useState } from "react";
import TodoItem from "./TodoItem";
import Form from "./Form";
import TodoList from "./TodoList";

export default function Todo() {
  // const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   setTodos([...todos, todo]);
  //   // console.log(todos);
  //   setTodo("");
  // }
  return (
    <div>
      {/* <Form /> */}
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      {/* <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          //   key={todo}
          onChange={(e) => setTodo(e.target.value)}
        />

        <button type="submit">Add</button>
      </form> */}
      {/* {console.log(todos)} */}
      {/* {todos.map((item) => (
        // <h3>{item}</h3>
        <TodoItem key={item} item={item} />
      ))} */}
    </div>
  );
}

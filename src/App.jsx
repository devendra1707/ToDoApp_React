import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Todo from "./components/Todo";
import InlineComponents from "./components/InlineComponents";
import OutlineComponemt from "./components/OutlineComponent";
import Header from "./components/Header";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <Header />
      <Todo />
      {/* <Form /> */}
      {/* <InlineComponents />
      <OutlineComponemt /> */}
    </div>
  );
}

export default App;

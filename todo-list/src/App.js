import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { TodoList } from "./components/TodoList";

class App extends React.Component {
  render() {
    return <TodoList></TodoList>;
  }
}

export default App;

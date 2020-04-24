import React from "react";
import axios from "axios";
import { Card, Table, Button, Form, Navbar } from "react-bootstrap";
import { Todo } from "./Todo";

export class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.newTaskSubmit = this.newTaskSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  state = {
    todos: [],
    newTaskDescription: "",
  };

  async componentDidMount() {
    // Load every Todo in the db
    await this.loadTodos();
  }

  loadTodos() {
    // Load every Todo in the db
    axios
      .get("/tasks/all")
      .then((res) => {
        this.setState({ todos: res.data.tasks });
      })
      .catch((err) => {
        console.log("Error retrieving the data:", err);
      });
  }

  async handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    await this.setState({
      [name]: value,
    });
  }

  async newTaskSubmit(event) {
    event.preventDefault();

    let task = {
      description: this.state.newTaskDescription,
    };

    axios({
      method: "post",
      url: "/tasks/create",
      data: task,
    })
      .then((res) => {
        console.log("Exito ", res);
        this.loadTodos();
      })
      .catch((err) => {
        console.log("Error ", err);
      });
  }

  render() {
    return (
      <React.Fragment>
        <PageNavbar></PageNavbar>
        <br />
        <div className="container">
          <NewTaskForm
            onSubmit={this.newTaskSubmit}
            handleInputChange={this.handleInputChange}
            state={this.state}
          ></NewTaskForm>

          <List todos={this.state.todos}></List>
        </div>
      </React.Fragment>
    );
  }
}

function NewTaskForm(props) {
  return (
    <Card>
      <Card.Body>
        <Form className="text-center" onSubmit={props.onSubmit}>
          <label htmlFor="task-desc-group">Description of the new task</label>
          <div className="form-group task-desc-group">
            <input
              type="text"
              className="form-control"
              name="newTaskDescription"
              placeholder="..."
              onChange={props.handleInputChange}
            />
            <br />
            <Button type="submit" className="btn btn-primary">
              Submit new task
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}

function PageNavbar(props) {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Navbar.Brand href="/#">
        GD #6 | Jorge Germán Reyes | A01336637
      </Navbar.Brand>
    </Navbar>
  );
}

function List(props) {
  const tasks = props.todos;
  const todoList = tasks.map((task, index) => (
    <tr key={index}>
      <Todo
        id={task.id}
        description={task.description}
        status={task.status}
      ></Todo>
    </tr>
  ));
  return (
    <Table bordered>
      <thead>
        <tr>
          <th>ID</th>
          <th>Description</th>
          <th>Status</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>{todoList}</tbody>
    </Table>
  );
}

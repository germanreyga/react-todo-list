import React from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

export class Todo extends React.Component {
  deleteTask(id) {
    let task = {
      id: id,
    };

    axios({
      method: "delete",
      url: "/tasks/delete",
      data: task,
    })
      .then((res) => {
        console.log("Exito ", res);
        window.location.reload();
      })
      .catch((err) => {
        console.log("Error ", err);
      });
  }

  changeTaskStatus(id) {
    let task = {
      id: id,
    };

    axios({
      method: "put",
      url: "/tasks/update",
      data: task,
    })
      .then((res) => {
        console.log("Exito ", res);
        window.location.reload();
      })
      .catch((err) => {
        console.log("Error ", err);
      });
  }

  markAsDone(id) {}

  render() {
    var bgColor = "";
    if (this.props.status === "pending") {
      bgColor = "bg-success";
      return (
        <React.Fragment>
          <td>{this.props.id}</td>
          <td>{this.props.description}</td>
          <td className={bgColor}>
            {this.props.status}{" "}
            <Button
              className="btn btn-sm btn-secondary"
              onClick={() => this.changeTaskStatus(this.props.id)}
            >
              Mark as done
            </Button>
          </td>
          <td>
            <Button
              className="btn-danger"
              onClick={() => this.deleteTask(this.props.id)}
            >
              Delete
            </Button>
          </td>
        </React.Fragment>
      );
    } else {
      bgColor = "bg-secondary";
      return (
        <React.Fragment>
          <td>{this.props.id}</td>
          <td>{this.props.description}</td>
          <td className={bgColor}>{this.props.status}</td>
          <td>
            <Button
              className="btn-danger"
              onClick={() => this.deleteTask(this.props.id)}
            >
              Delete
            </Button>
          </td>
        </React.Fragment>
      );
    }
  }
}

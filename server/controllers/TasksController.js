let Tasks = require("../models/Task");

exports.allTasks = (req, res) => {
  Tasks.findAll()
    .then((data) => {
      res.json({ tasks: data });
    })
    .catch((error) => {
      res.status(500).json({ error: error });
    });
};

exports.createTask = (req, res) => {
  let description = req.body.description;
  Tasks.create(description)
    .then((data) => {
      res.json({ tasks: data });
    })
    .catch((error) => {
      res.status(500).json({ error: error });
    });
};

exports.deleteTask = (req, res) => {
  let id = req.body.id;
  Tasks.delete(id)
    .then((data) => {
      res.json({ tasks: data });
    })
    .catch((error) => {
      res.status(500).json({ error: error });
    });
};

exports.changeTaskStatus = (req, res) => {
  let id = req.body.id;
  Tasks.changeStatus(id)
    .then((data) => {
      res.json({ tasks: data });
    })
    .catch((error) => {
      res.status(500).json({ error: error });
    });
};

const router = require("express").Router();

const tasksController = require("../controllers/TasksController");

router.get("/tasks/all", tasksController.allTasks);
router.post("/tasks/create", tasksController.createTask);
router.put("/tasks/update", tasksController.changeTaskStatus);
router.delete("/tasks/delete", tasksController.deleteTask);

module.exports = router;

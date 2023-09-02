const express = require('express');
const {
  getAllTasks,
  getTaskById,
  updateTaskById,
  createTask,
  deleteTaskById,
} = require('../controllers/tasks.controller');
const taskRouter = express.Router();

// GET /tasks/
// GET /tasks
taskRouter.get('/', getAllTasks);

//2. get task by id
taskRouter.get('/:id', getTaskById);

//3. update task by id
taskRouter.put('/:id', updateTaskById);

//4. create a new task
taskRouter.post('/', createTask);

//5. delete task by id
taskRouter.delete('/:id', deleteTaskById);

module.exports = taskRouter;

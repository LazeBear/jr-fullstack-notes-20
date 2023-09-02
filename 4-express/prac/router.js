const express = require('express');
const router = express.Router();

const tasks = [
  {
    id: 1,
    description: 'task 1',
    done: false,
  },
  {
    id: 2,
    description: 'task 2',
    done: false,
  },
  {
    id: 3,
    description: 'task 3',
    done: false,
  },
];

//1. get all tasks allow query params for filtering
router.get('/tasks', (req, res) => {
  console.log('get all tasks');
  res.send(tasks);
});

//2. get task by id
router.get('/tasks/:id', (req, res) => {
  const id = Number(req.params.id);
  const taskById = tasks.filter((task) => {
    return task.id === id;
  });
  if (taskById.length == 0) {
    res.status(202).send({
      msg: `Sorry, there is no task for id:${id}`,
    });
  } else {
    res.send(taskById[0]);
  }
});

//3. update task by id
router.put('/tasks/:id', (req, res) => {
  const id = Number(req.params.id);
  const taskById = tasks.filter((task) => {
    return task.id === id;
  });
  if (taskById.length == 0) {
    res.status(202).send({
      msg: `Sorry, there is no task for id:${id}`,
    });
  } else {
    taskById[0].done = true;
    res.status(201).send({
      msg: `Successfully updated for id:${id}`,
      updated: `id:${id} is done.`,
      tasks: tasks,
    });
  }
});

//4. create a new task
router.post('/tasks', (req, res) => {
  const newTask = req.body;
  const id = req.body.id;
  const index = tasks.findIndex((task) => {
    return task.id === id;
  });
  if (index == -1) {
    tasks.push(newTask);
    res.status(201).send({
      msg: 'Successfully posted',
      posted: newTask,
      tasks: tasks,
    });
  } else {
    res.status(202).send({
      msg: `Sorry, there is already a task for id:${id}`,
    });
  }
});

//5. delete task by id
router.delete('/tasks/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = tasks.findIndex((task) => {
    return task.id === id;
  });
  if (index == -1) {
    res.status(202).send({
      msg: `Sorry, there is no task for id:${id}`,
    });
  } else {
    tasks.splice(index, 1);
    res.status(201).send({
      msg: 'Successfully deleted',
      deleted: `id=${id}`,
      tasks: tasks,
    });
  }
});

//add some headers in your server to solve the CORS issue

module.exports = router;

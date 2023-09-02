const express = require('express');
// taskRouter
const taskRouter = express.Router();

const tasks = [
  {
    id: 2,
    description: 'task 2',
    done: false,
  },
  {
    id: 1,
    description: 'task 1',
    done: false,
  },
  {
    id: 3,
    description: 'task 3',
    done: false,
  },
];
let id = 4;

//1. get all tasks allow query params for filtering
taskRouter.get('/tasks', (req, res) => {
  const { description } = req.query;
  if (description) {
    const filteredTasks = tasks.filter((task) =>
      task.description.includes(description)
    );
    res.json(filteredTasks);
    return;
  }

  res.json(tasks);
  // return;
});

//2. get task by id
taskRouter.get('/tasks/:id', (req, res) => {
  const id = Number(req.params.id);
  // const taskById = tasks.filter((task) => {
  //   return task.id === id;
  // });
  const task = tasks.find((task) => task.id === id);
  // if (! task.id)
  // fail fast
  if (!task) {
    /**
     * {
     *    statusCode: 404,
     *    error: 'not found',
     *    message: 'task not found'
     * }
     */
    res.status(404).json({
      msg: `Sorry, there is no task for id:${id}`,
    });
    return;
  }
  res.json(task);
  // if (taskById.length == 0) {
  //   res.status(202).send({
  //     msg: `Sorry, there is no task for id:${id}`,
  //   });
  // } else {
  //   res.send(taskById[0]);
  // }
});

//3. update task by id
taskRouter.put('/tasks/:id', (req, res) => {
  const id = Number(req.params.id);
  const task = tasks.find((task) => task.id === id);
  if (!task) {
    res.status(404).json({
      msg: `Sorry, there is no task for id:${id}`,
    });
    return;
  }
  const { description, done } = req.body;
  if (description !== undefined) {
    // type check
    if (typeof description !== 'string') {
      res.status(400).json({
        msg: 'invalid description format',
      });
      return;
    }
    task.description = description;
  }
  if (done !== undefined) {
    // type check, boolean
    task.done = done;
  }

  res.json(task);

  /**
   * {
   *    msg: '',
   *    data:
   * }
   */

  // findIndex
  // tasks[index] = {...task, done, description}

  // const taskById = tasks.filter((task) => {
  //   return task.id === id;
  // });
  // if (taskById.length == 0) {
  //   res.status(202).send({
  //     msg: `Sorry, there is no task for id:${id}`,
  //   });
  // } else {
  //   taskById[0].done = true;
  //   res.status(201).send({
  //     msg: `Successfully updated for id:${id}`,
  //     updated: `id:${id} is done.`,
  //     tasks: tasks,
  //   });
  // }
});

//4. create a new task
taskRouter.post('/tasks', (req, res) => {
  // const newTask = req.body;
  // const id = req.body.id;
  // const {description, done = false} = req.body;
  const { description } = req.body;

  // never use data from the client DIRECTLY
  // data validation
  if (description === undefined) {
    res.status(400).json({
      msg: 'invalid description type',
    });
    return;
  }

  const newTask = { id: id++, description, done: false };
  // id = id +1;
  // id++
  // id += 1
  tasks.push(newTask);
  res.status(201).json(newTask);

  // const index = tasks.findIndex((task) => {
  //   return task.id === id;
  // });
  // if (index == -1) {
  //   tasks.push(newTask);
  //   res.status(201).send({
  //     msg: 'Successfully posted',
  //     posted: newTask,
  //     tasks: tasks,
  //   });
  // } else {
  //   res.status(202).send({
  //     msg: `Sorry, there is already a task for id:${id}`,
  //   });
  // }
});

//5. delete task by id
taskRouter.delete('/tasks/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = tasks.findIndex((task) => {
    return task.id === id;
  });

  // if (index == undefined) // undefined, null
  if (index === -1) {
    res.status(404).send({
      msg: `Sorry, there is no task for id:${id}`,
    });
    return;
  }
  tasks.splice(index, 1);
  res.sendStatus(204); // No content
  // const [deletedTask] = tasks.splice(index, 1);
  // res.json(deletedTask);
});

//add some headers in your server to solve the CORS issue

module.exports = taskRouter;

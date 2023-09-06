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

/**
 * @swagger
 * components:
 *  schemas:
 *    Task:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *          description: The task ID.
 *          example: 1
 *        description:
 *          type: string
 *          description: The task description
 *        done:
 *          type: boolean
 *          description: The task status
 */

/**
 * @swagger
 * /tasks:
 *  get:
 *    tags: [Tasks]
 *    summary: Returns the list of all the tasks
 *    parameters:
 *      - in: query
 *        name: description
 *        schema:
 *          type: string
 *        description: The task description
 *    responses:
 *      200:
 *        description: The list of the tasks
 *        content:
 *         application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Task'
 */
const getAllTasks = (req, res) => {
  const { description } = req.query;
  if (description) {
    const filteredTasks = tasks.filter((task) =>
      task.description.includes(description)
    );
    res.json(filteredTasks);
    return;
  }

  res.json(tasks);
};

const getTaskById = (req, res) => {
  const id = Number(req.params.id);
  const task = tasks.find((task) => task.id === id);
  if (!task) {
    res.status(404).json({
      msg: `Sorry, there is no task for id:${id}`,
    });
    return;
  }
  res.json(task);
};

const updateTaskById = (req, res) => {
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
};

const createTask = (req, res) => {
  const { description } = req.body;
  if (description === undefined) {
    res.status(400).json({
      msg: 'invalid description type',
    });
    return;
  }

  const newTask = { id: id++, description, done: false };
  tasks.push(newTask);
  res.status(201).json(newTask);
};

const deleteTaskById = (req, res) => {
  const id = Number(req.params.id);
  const index = tasks.findIndex((task) => {
    return task.id === id;
  });

  if (index === -1) {
    res.status(404).send({
      msg: `Sorry, there is no task for id:${id}`,
    });
    return;
  }
  tasks.splice(index, 1);
  res.sendStatus(204);
};

module.exports = {
  getAllTasks,
  getTaskById,
  updateTaskById,
  deleteTaskById,
  createTask,
};

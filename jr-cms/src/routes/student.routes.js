const { Router } = require('express');
const {
  getAllStudents,
  getStudentById,
  updateStudentById,
  deleteStudentById,
  addStudent,
} = require('../controllers/student.controllers');

const studentRouter = Router();

studentRouter.get('/', getAllStudents);
studentRouter.get('/:id', getStudentById);
studentRouter.post('/', addStudent);
studentRouter.patch('/:id', updateStudentById);
studentRouter.delete('/:id', deleteStudentById);

module.exports = studentRouter;

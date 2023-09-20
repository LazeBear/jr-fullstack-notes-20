const { Router } = require('express');
const {
  getAllCourses,
  getCourseById,
  updateCourseById,
  deleteCourseById,
  addCourse,
} = require('../controllers/course.controllers');

const courseRouter = Router();

courseRouter.get('/', getAllCourses);
courseRouter.get('/:id', getCourseById);
courseRouter.post('/', addCourse);
courseRouter.patch('/:id', updateCourseById);
courseRouter.delete('/:id', deleteCourseById);

module.exports = courseRouter;

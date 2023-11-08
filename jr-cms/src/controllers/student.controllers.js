const Student = require('../models/student.model');
const Course = require('../models/course.model');
const NotFoundException = require('../exceptions/NotFoundException');

/**
 * Handle errors -> handle async errors
 * 1. try catch -> async await
 * try {
 *    xxxxx
 * } catch(e) {
 *    // or handle it directly
 *    next(e);
 * }
 *
 * 2. .catch -> promise
 * Student.find().exec().then().catch(e => next(e));
 *
 * 3. callback
 * Student.find().exec((err, students)=>{
 *    if (err) {
 *       handle error
 *       next(err);
 *       return
 *    }
 * })
 */

// const catchAllErrors = (routeHandler) => {
//   return async (req, res,next) => {
//     try {
//       await routeHandler(req, res, next);
//     } catch(e) {
//       next(e);
//     }
//   }
// }

// express-async-errors

const addStudent = async (req, res, next) => {
  // try {
  const { firstName, lastName, email } = req.body;
  // data validation
  const student = new Student({ firstName, lastName, email });
  // const student = new Student(req.body);
  // try {
  await student.save();
  res.status(201).json(student);
  // } catch (e) {
  //   console.log(e);
  //   next(e);
  //   // res.send(400);
  // }
};
const getAllStudents = async (req, res) => {
  // db.students.find()
  // Query chain
  // Student.find().sort().limit().filter()
  // Student.find() -> Query
  // Query.sort() -> Query
  // builder pattern
  const students = await Student.find().exec();
  res.json(students);
};
const getStudentById = async (req, res) => {
  const { id } = req.params;
  const student = await Student.findById(id).exec();
  if (!student) {
    // throw new Error("xxxxx");
    throw new NotFoundException('Student not found');
    // res.status(404).json({ error: 'Student not found' });
    // return;
    // next(new NotFoundException(xxxx))
  }
  res.json(student);
};
const updateStudentById = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email } = req.body;

  const student = await Student.findByIdAndUpdate(
    id,
    {
      firstName,
      lastName,
      email,
    },
    { new: true }
  ).exec();
  // await Student.findOneAndUpdate({email}, {})
  if (!student) {
    res.status(404).json({ error: 'Student not found' });
    return;
  }
  res.json(student);
};
const deleteStudentById = async (req, res) => {
  const { id } = req.params;
  const student = await Student.findByIdAndDelete(id).exec();
  if (!student) {
    res.status(404).json({ error: 'Student not found' });
    return;
  }
  await Course.updateMany(
    {
      students: student._id,
    },
    {
      $pull: {
        students: student._id,
      },
    }
  ).exec();
  res.sendStatus(204);
};
// POST /v1/students/:studentId/courses/:courseId
const addStudentToCourse = async (req, res) => {
  const { studentId, courseId } = req.params;

  // 通过id找student和course
  const student = await Student.findById(studentId).exec();
  const course = await Course.findById(courseId).exec();
  // 确保学生和课程确实存在
  if (!student || !course) {
    res.status(404).json({ error: 'Student or course not found' });
    return;
  }

  // 把学生添加进课程
  course.students.addToSet(studentId);
  // 把课程添加给学生
  student.courses.addToSet(courseId);

  // 记得保存
  await student.save();
  await course.save();

  res.json(student);
};

// DELETE /v1/students/:studentId/courses/:courseId
const removeStudentFromCourse = async (req, res) => {
  const { studentId, courseId } = req.params;

  // 通过id找student和course
  const student = await Student.findById(studentId).exec();
  const course = await Course.findById(courseId).exec();
  // 确保学生和课程确实存在
  if (!student || !course) {
    res.status(404).json({ error: 'Student or course not found' });
    return;
  }
  student.courses.pull(courseId); // pull -> $pull
  course.students.pull(studentId);

  await student.save();
  await course.save();

  res.sendStatus(204);
};

module.exports = {
  addStudent,
  getAllStudents,
  getStudentById,
  updateStudentById,
  deleteStudentById,
  addStudentToCourse,
  removeStudentFromCourse,
};

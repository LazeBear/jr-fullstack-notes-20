const Student = require('../models/student.model');

const addStudent = async (req, res) => {
  const { firstName, lastName, email } = req.body;
  // data validation
  const student = new Student({ firstName, lastName, email });
  // const student = new Student(req.body);
  // try {
  await student.save();
  res.json(student);
  // } catch(e) {

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
    res.status(404).json({ error: 'Student not found' });
    return;
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
  res.sendStatus(204);
};

module.exports = {
  addStudent,
  getAllStudents,
  getStudentById,
  updateStudentById,
  deleteStudentById,
};

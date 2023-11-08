// supertest
const supertest = require('supertest');
const app = require('../../app');
const Student = require('../../models/student.model');
const mongoose = require('mongoose');
const { generateToken } = require('../../utils/jwt');

const request = supertest(app);

// fetch, axios
// fetch('/')
// axios.get('/')
// request.get('')

const token = generateToken({ username: 'test' });

beforeAll(async () => {
  await mongoose.connect(global.__MONGO_URI__);
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('/v1/students', () => {
  beforeEach(async () => {
    await Student.deleteMany({});
    // await Student.insertMany({})
  });
  // describe('GET /', ()=>{})
  describe('POST /', () => {
    it('should save the student to DB if request is valid', async () => {
      // POST /v1/students + student payload + (token)
      const payload = {
        firstName: 'john',
        lastName: 'Doe',
        email: 'email@email.com',
      };

      const res = await request
        .post('/v1/students')
        .set('Authorization', `Bearer ${token}`)
        .send(payload);

      expect(res.statusCode).toBe(201);
      const student = await Student.findOne(payload).exec();
      // student will 'null' if not found
      expect(student).not.toBeNull();
    });

    it.each`
      property       | value
      ${'firstName'} | ${undefined}
      ${'lastName'}  | ${undefined}
      ${'email'}     | ${'a'}
      ${'email'}     | ${'a.com'}
      ${'email'}     | ${'a@@a.com'}
    `(
      'should return 400 if $property is $value',
      async ({ property, value }) => {
        const invalidStudent = {
          firstName: 'john',
          lastName: 'Doe',
          email: 'email@email.com',
          [property]: value,
        };

        const res = await request
          .post('/v1/students')
          .set('Authorization', `Bearer ${token}`)
          .send(invalidStudent);

        expect(res.statusCode).toBe(400);
        const student = await Student.findOne(invalidStudent).exec();
        expect(student).toBeNull();
      }
    );
  });
});

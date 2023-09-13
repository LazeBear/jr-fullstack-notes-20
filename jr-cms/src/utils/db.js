const mongoose = require('mongoose');

const connectToDB = () => {
  const connectionString = process.env.CONNECTION_STRING;
  if (!connectionString) {
    console.error('CONNECTION_STRING is not defined');
    // 正常退出
    // 非正常退出
    // 0 -> 正常
    // 非0 -> 不正常，有错误， 1+
    process.exit(1);
  }
  const db = mongoose.connection;
  db.on('error', (error) => {
    console.error(error);
    process.exit(2);
  });
  db.on('connected', () => {
    console.log('DB connected');
  });
  db.on('disconnected', () => {
    console.log('DB disconnected');
  });

  return mongoose.connect(connectionString);
};

module.exports = connectToDB;

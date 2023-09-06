const winston = require('winston');
const path = require('path');

// __filename -> logger.js -> /usr/Mason/xxxxxxx/logger.js
const createLogger = (filePath) => {
  const logger = winston.createLogger({
    level: 'info',
    defaultMeta: {
      file: path.basename(filePath),
    },
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.printf(({ timestamp, level, message, file }) => {
        return `[${timestamp}] [${level}] [${file}]: ${message}`;
      })
    ),
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({
        filename: 'logs/error.log',
        level: 'error',
      }),
      new winston.transports.File({
        filename: 'logs/info.log',
        level: 'info',
      }),
    ],
  });

  logger.stream = {
    write: (message) => {
      logger.info(message);
    },
  };

  return logger;
};

module.exports = createLogger;

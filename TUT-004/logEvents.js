// node_modules
const { format } = require("date-fns");
const { v4: uuid } = require("uuid");

// Common core modules
const fs = require("fs");
const path = require("path");
const fsPromises = require("fs").promises;

const logEvents = async (message) => {
  const dateTime = `${format(new Date(), "dd-MM-yyyy\tHH:mm:ss")}`;
  const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
  console.log(logItem);

  try {
    if (!fs.existsSync(path.join(__dirname, "logs"))) {
      await fsPromises.mkdir(path.join(__dirname, "logs"));
    }
    // testing
    await fsPromises.appendFile(
      path.join(__dirname, "logs", "eventLog.txt"),
      logItem,
      "utf8"
    );
  } catch (error) {
    console.error(error);
  }
};

module.exports = logEvents;

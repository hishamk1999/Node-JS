// const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

// Reading data from filesystem
// fs.readFile(
//   path.join(__dirname, "files", "starter.txt"),
//   "utf-8",
//   (err, data) => {
//     if (err) {
//       throw err;
//     }
//     console.log(data);
//   }
// );

// Writing data to filesystem
/**
fs.writeFile(
  path.join(__dirname, "files", "replay.txt"),
  "Nice to meet you!",
  (err) => {
    if (err) {
      throw err;
    }
    console.log("Writing replay complete");
    
    // Updating the file
    fs.appendFile(
      path.join(__dirname, "files", "replay.txt"),
      "\nYes it is.",
      (err) => {
        if (err) {
          throw err;
        }
        console.log("Append complete");
        
        // Rename the file
        fs.rename(
          path.join(__dirname, "files", "replay.txt"),
          path.join(__dirname, "files", "newReplay.txt"),
          (err) => {
            if (err) {
              throw err;
            }
            console.log("Rename complete");
          }
          );
        }
        );
      }
      );
      */

// File operations asynchronously
const fileOperations = async () => {
  try {
    // Read file
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "starter.txt"),
      "utf8"
    );
    console.log(data);
    // Delete file
    await fsPromises.unlink(path.join(__dirname, "files", "starter.txt"));

    // Write file
    await fsPromises.writeFile(
      path.join(__dirname, "files", "promsWrite.txt"),
      data
    );
    // Append file
    await fsPromises.appendFile(
      path.join(__dirname, "files", "promsWrite.txt"),
      "\nNice to meet you!"
    );
    // Rename file
    await fsPromises.rename(
      path.join(__dirname, "files", "promsWrite.txt"),
      path.join(__dirname, "files", "promsRename.txt")
    );

    // Read file again
    const newData = await fsPromises.readFile(
      path.join(__dirname, "files", "promsRename.txt"),
      "utf8"
    );
    console.log("New data: " + newData);
  } catch (err) {
    console.error(err);
  }
};
fileOperations();

// exit on uncaught exception errors
process.on("uncaughtException", (err) => {
  console.log("There was an uncaught exception error: " + err);
  process.exit(1);
});

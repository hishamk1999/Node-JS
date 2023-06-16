const fs = require("fs");
const path = require("path");

const readStream = fs.createReadStream(
  path.join(__dirname, "files", "lorem.txt"),
  { encoding: "utf8" }
);

const writeStream = fs.createWriteStream(
  path.join(__dirname, "files", "new-lorem.txt")
);

// readStream.on("data", (dataChunk) => {
//   writeStream.write(dataChunk);
// });

// Better way

readStream.pipe(writeStream);

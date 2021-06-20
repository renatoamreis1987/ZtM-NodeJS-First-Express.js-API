const path = require("path");

function getMessages(req, res) {
  res.sendFile(path.join(__dirname, "..", "public", "images", "wp8658342.jpg"));
  // res.send("<ul><li>Hellloooo Albert!</li></ul>");
}

function postMessage(req, res) {
  console.log("Updating messages....");
}

module.exports = {
  getMessages,
  postMessage,
};

const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" }
});

mongoose.connect("mongodb://localhost:27017/editor");

const Document = mongoose.model("Document", {
  _id: String,
  data: Object
});

io.on("connection", socket => {

  socket.on("get-document", async documentId => {

    if (!documentId) return;

    const document = await findOrCreateDocument(documentId);

    socket.join(documentId);

    socket.emit("load-document", document?.data || {});

    socket.on("send-changes", delta => {
      socket.broadcast.to(documentId).emit("receive-changes", delta);
    });

    socket.on("save-document", async data => {
      await Document.findByIdAndUpdate(documentId, { data });
    });

  });

});
async function findOrCreateDocument(id) {

  if (!id) return;

  let document = await Document.findById(id);

  if (document) return document;

  document = new Document({
    _id: id,
    data: {}
  });

  await document.save();

  return document;
}

server.listen(5000, () => {
  console.log("Server running on port 5000");
});
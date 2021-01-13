const express = require("express");
const server = express();
const PostRouter = require("./post-router");

server.use(express.json());
server.use("/api/posts", PostRouter);

server.get("/", (req, res) => {
	res.status(200).json({ server: "is up" });
});

module.exports = server;

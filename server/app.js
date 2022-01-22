const express = require('express')
const app = express()
const server = require('http').createServer(app)
express.json()
express.urlencoded({extended: true})

const options = {
  cors: {
    origin: "https://virtual-visite-oskawa.herokuapp.com",
    credentials: true
  }
};
const io = require('socket.io')(server, options)

// const io = require('socket.io')(server)

let users = []

io.on("connect", (socket) => {
  users.push(socket.id)
  socket.emit("checkIfUsers", {users, socket:socket.id});
  socket.broadcast.emit("otherConnected", socket.id);


  socket.on("direction", function (x, z, id) {
    socket.broadcast.emit("updateDirection", { 'socketId': socket.id, 'x': x, 'z': z, 'id': id })
  })

  socket.on("disconnect", (reason) => {
    socket.broadcast.emit("disconnected", socket.id);
    const index = users.indexOf(socket.id);
    if (index > -1) {
      users.splice(index, 1);
    }

  })
});

module.exports = {
  app, server
}

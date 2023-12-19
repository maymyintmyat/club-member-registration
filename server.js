const { response, request } = require("express");
const express = require("express");
const app = express();
const port = 3000;

let users = [
  { id: 1, name: "user1", email: "user1@gmail.com", age: 20 },
  { id: 2, name: "user2", email: "user2@gmail.com", age: 24 },
  { id: 3, name: "user3", email: "user3@gmail.com", age: 19 },
];

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/users", (request, response) => {
  response.send(users);
});

app.post("/users", (request, response) => {
  const newUser = request.body;
  const isUserExist = users.find((user) => user.email === newUser.email);
  if (isUserExist) {
    throw new Error("Ooops this member is already exists");
  }
  users.push(newUser);
  console.log(newUser);
  response.send(users);
});

app.delete("/users/:id", (request, response) => {
  const idToDelete = parseInt(request.params.id, 10);
  users = users.filter((user) => user.id !== idToDelete);
  response.send(users);
});

app.listen(port, () => {
  console.log(`Example app started.Listening on port: ${port}`);
});

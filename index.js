const express = require("express");
const app = express();

const routerApi = require('./routes/index')

app.set("port", 3000);

app.get("/", (req, res) => {
  res.send("Hola");
});
// Routes

routerApi(app)

// Starting the server

app.listen(app.get("port"), () => {
  console.log("Listening in " + app.get("port"));
});

const express = require("express");
const hbs = require("hbs");
const app = express();
require("dotenv").config();

const port = process.env.PORT;

app.set("view engine");
hbs.registerPartials(__dirname + "/views/partials");

app.use(express.static("public"));

// app.get("/", (req, res) => {
//   res.render("home", {
//     nombre: "Giuliano Cicarelli",
//     titulo: "Curso de Node",
//   });
// });

// app.get("/generic", (req, res) => {
//   res.render("generic", {
//     nombre: "Giuliano Cicarelli",
//     titulo: "Curso de Node",
//   });
// });

// app.get("/elements", (req, res) => {
//   res.render("elements", {
//     nombre: "Giuliano Cicarelli",
//     titulo: "Curso de Node",
//   });
// });

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, console.log(`corriendo en puerto ${port}`));

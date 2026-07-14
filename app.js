// app.js
const path = require("node:path");
const express = require("express");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: true }));

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

app.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

app.get("/new", (req, res) => {
  res.render("form", { title: "Mini Messageboard", messages: messages });
});

app.post("/new", (req, res) => {

  console.log(req.body.messageText);
  console.log('huh');
  
  messages.push({ text: req.body.messageText, user: req.body.messageUser, added: new Date() });

  res.redirect("/")

});

app.post("/new", (req, res) => {
  res.send("i be postin");
});

const PORT = 3000;

app.listen(PORT, (error) => {

    if (error) {
        throw error;
    }

    console.log(`Mini Message Board on port ${PORT}`);

})
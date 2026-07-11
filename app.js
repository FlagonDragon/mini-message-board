// app.js
// const path = require("node:path");
const express = require("express");

const app = express();

// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "ejs");

// const assetsPath = path.join(__dirname, "public");
// app.use(express.static(assetsPath));

app.get("/", (req, res) => res.send("Homepage"));

const PORT = 3000;

app.listen(PORT, (error) => {

    if (error) {
        throw error;
    }

    console.log(`Mini Message Beard on port ${PORT}`);

})
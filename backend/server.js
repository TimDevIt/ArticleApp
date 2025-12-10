const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./app/models");

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


db.sequelize.sync({ alter: true})
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });


// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });


app.get("/", (req, res) => {
  res.json({ message: "Welcome to application." });
});

require("./app/routes/article.routes")(app);
require("./app/routes/comment.routes")(app);


const PORT = process.env.PORT || 4200;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


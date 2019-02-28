const express = require("express");
const app = express();
const port = 3000;
const router = require("./routes/index");
const routerUser = require("./routes/users");
const routerAlcohol = require("./routes/alcohols");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Homepage
app.use("/",router);
app.use("/users", routerUser);
//Subject
app.use("/alcohols", routerAlcohol);
//Student


app.listen(port, () => console.log(`listening on port ${port}`));
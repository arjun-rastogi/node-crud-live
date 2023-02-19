const express  =  require("express");
const bodyparser = require("body-parser");  
const sequelize = require("./util/database");  
const User = require("./models/user");  


const app = express();

app.use(bodyparser.json());

app.use(bodyparser.urlencoded({extended:false}));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, PATCH, DELETE"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization"
    );
    next();
});

// test route

app.get("/", (req, res, next) => {
    res.send("hello world");
})

// CRUD Routes
app.use("/users", require("./routes/users"));

// Error Handling

app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    res.status(status).json({ message: message });
})

//Sync Databsde

sequelize
.sync()
.then(result => {
    console.log("Database Connected");
    app.listen(3000)
})
.catch(err => console.log(err));

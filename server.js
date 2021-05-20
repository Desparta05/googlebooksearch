
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const path = require("path");


const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(routes);


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/merngooglebooks", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
});

app.listen(PORT, function () {
    console.log(`API server now listening on PORT ${PORT}.`);
});
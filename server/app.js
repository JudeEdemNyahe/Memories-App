const express = require('express');
const bodyPaser = require('body-parser');
const morgan = require("morgan");
const cors = require('cors');
const app = express();
const postRoutes = require("./routes/post");
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}


app.use(bodyPaser.json({ limit: "30mb", extended: true }));
app.use(bodyPaser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());


app.use('/posts', postRoutes)
module.exports = app;
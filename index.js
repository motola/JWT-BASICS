const express = require("express");
const cors = require("cors")
require("dotenv").config;
const bycrpt = require("bcrypt"); 
const jwtRouter = require('./routers/route');
const notFound = require('./middleware/notFound');


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(jwtRouter);


const port = process.env.PORT || 3000



app.get('', (req,res) => {
    res.send("Working on JWT")

})

app.use(notFound);


app.listen(port, () => {
    console.log(`server is running on port ${port}`)
});
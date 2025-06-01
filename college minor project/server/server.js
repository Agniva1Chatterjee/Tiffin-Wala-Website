
require('dotenv').config();
const express = require("express") 
const app = express();
const authroute =require("./router/auth-router")
const contactroute = require("./router/contact-model")
const connectDb = require("./utils/db");
const errorMiddleware = require('./middlewares/error-middleware');

app.use(express.json());

app.use("/api/auth", authroute);
app.use("/api/from", contactroute)

app.use(errorMiddleware)

const PORT = 5000;

connectDb().then(()=>{
 app.listen(PORT, ()=> {
    console.log('server is runin at port: 5000');
    
});})
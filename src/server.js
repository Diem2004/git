import  express  from 'express';
import configViewEngine from './configs/ViewEngine';
import initWedRoute from './route/wed';
import connection from './configs/connectDB';
require('dotenv').config();
//const path = require('path');
const app = express();
const port = process.env.PORT || 8080; 
//console.log('>>> check port :', port)
configViewEngine(app);
initWedRoute(app);
app.listen(port,() =>{
console.log(`Example app listening on port ${port} `)
})

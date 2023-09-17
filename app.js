const express = require('express');
const app = express();

//Connect to the DB
require('./db/dbconn');

//Router 
app.use(express.json());
app.use(require('./router/router'));
                                 
//PORT
const PORT = 4000;
app.listen(PORT,()=>console.log(`Server Running on Port ${PORT}`));
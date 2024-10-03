const express=require('express');
const app=express();
const morgan=require('morgan');
app.use(morgan('dev'));
const path=require('path');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
const nav=[{
    link:'/home',name:'Home'
},{
    link:'/home/add-user',name:'Add Employee'
}];
const EmpRoutes1=require('./routes/crud')(nav);
app.use('/home',EmpRoutes1);
require('dotenv').config();
const PORT=process.env.PORT
require('./db/connection');





app.listen( PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})
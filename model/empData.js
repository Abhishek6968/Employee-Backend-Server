const mongoose=require('mongoose');
const EmpSchema=mongoose.Schema({
    _id:Number,
    Emp_Name:String,
    Emp_Des:String,
    Emp_Loc:String,
    Emp_Sal:Number

})
const EmpModel=mongoose.model('Employee',EmpSchema);
module.exports=EmpModel;

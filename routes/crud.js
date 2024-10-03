const express=require('express');
const router=express.Router();
router.use(express.json());
router.use(express.urlencoded({extended:true}));
const EmpModel=require('../model/empData')
function userRoute(nav){
router.get('/view',async (req,res)=>{
    try{
        const employees=await EmpModel.find();
        
        res.render('view', { employees,nav });

    }
    catch(error) {
        res.status(404).send('Data not found')
    }
})
router.post('/add-user', async (req, res) => {
    const { _id, Emp_Name, Emp_Des, Emp_Loc, Emp_Sal} = req.body;
    const newUser = new EmpModel({  _id, Emp_Name, Emp_Des, Emp_Loc, Emp_Sal});
  
    try {
      await newUser.save();
      res.status(201).send('User added successfully');
    } catch (err) {
      console.log(err);
      res.status(500).send('Error adding user');
    }
  });

  router.put('/edit/:id',async(req,res)=>{
    try{
    const id=req.params.id;
    await EmpModel.findByIdAndUpdate(id,req.body);
    res.status(200).send('edit Successful')
  } catch(error){
    res.status(404).send('edit Unsuccessful')
  }
})

router.delete('/delete/:id',async(req,res)=>{
    try{
    const id=req.params.id;
    await EmpModel.findByIdAndDelete(id);
    res.status(200).send('delete Successful')
  } catch(error){
    res.status(404).send('delete Unsuccessful')
  }
})
return router;
}


  
module.exports=userRoute;
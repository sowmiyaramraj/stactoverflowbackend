const mongo=require("../connect");
const {ObjectId}=require("mongodb");


module.exports.getEmployee=async (req,res,next)=>{
    try{
       const employeedata=await mongo.selectedDb.collection("employee")
       .find().toArray();
       res.send(employeedata);
       }catch(err){
        console.error(err);
    res.status(500).send(err);
       }
};

module.exports.updateEmployee=async (req,res,next)=>{
    try{
        const id= req.params.id;
        const updatedData= await mongo.selectedDb
        .collection("employee")
        .findOneAndUpdate({_id:ObjectId(id)},{$set:{...req.body}},{returnDocument:"after"});
        res.send(updatedData);
    
    }catch(err){
        console.error(err);
        res.status(500).send(err);
    }
   };

module.exports.createEmployee=async (req,res)=>{
   try{
    const insertedresponce=await mongo.selectedDb
    .collection("employee")
    .insertOne(req.body);
    res.send(insertedresponce);
   }
   catch(err){
    console.error(err);
    res.status(500).send(err);
   }
};

module.exports.deleteEmployee=async (req,res,next)=>{
   try{
    const id=req.params.id;
    const deleteddata=await mongo.selectedDb.collection("employee")
    .remove({_id:ObjectId(id)});
    req.send(deleteddata);
   }catch(err){
    console.error(err);
    res.status(500).send(err);
   }
};
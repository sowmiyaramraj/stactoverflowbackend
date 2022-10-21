const express= require("express");

const app =express();
console.log("hi)");
const dotenv=require("dotenv");
const employeeRouter=require("./router/employeeRouter");
const mongo= require("./connect");
dotenv.config();
mongo.connect();
app.use(express.json());


app.use("/",(req,res,next)=>{
    //Aunthendication
    var auth={
        authorised:true,
    };
    if(auth.authorised)
    {
        next();
    }
    else{
        res.send({msg:"Not authorised"});
    }
});

app.use("/employee",employeeRouter);


app.listen(process.env.PORT);


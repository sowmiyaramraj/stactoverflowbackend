const express=require("express");
const router=express.Router();
const employeeModule=require ("../module/employeeModule");

router.get("/get",employeeModule.getEmployee);

router.put("/update/:id",employeeModule.updateEmployee);

router.post("/create",employeeModule.createEmployee);

router.delete("/delete/:id",employeeModule.deleteEmployee);

module.exports=router;
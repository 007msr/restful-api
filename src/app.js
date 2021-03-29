const express= require("express");
const mongoose= require("mongoose");
const app=express();
require("./db/conn");
const MenModel=require("./models/models");
const port=process.env.PORT ||3000;
app.use(express.json());
app.get("/", (req,res)=>{
  res.send("WELCOME TO THE ROOT PAGE");
})
app.get("/mensapi", async(req,res)=>{
  try{
    const getmendata= await MenModel.find({}).sort({"rank":1});
       res.send(getmendata);
  }catch(e){res.send(e)}
})
app.get("/mensapi/:id",async(req,res)=>
{
  try{
     const id=req.params.id;
    const displayid= await MenModel.findById(id);
    res.send(displayid);

  }
  catch(err){ res.send(err)}
})
app.patch("/mensapi/:id",async(req,res)=>
{
  try{
     const id=req.params.id;
    const displayid= await MenModel.findByIdAndUpdate(id,req.body,{new:true});
    res.send(displayid);

  }
  catch(err){ res.stautus(500).send(err)}
})
app.delete("/mensapi/:id",async(req,res)=>
{
  try{
     const id=req.params.id;
    const displayid= await MenModel.findByIdAndDelete(id);
    res.send(displayid);

  }
  catch(err){ res.stautus(500).send(err)}
})

app.post("/mensapi",async(req,res)=>{
  try{
    const mendata= new MenModel(req.body);
  res.status(201).send(mendata);
   const mendatasave= await mendata.save();
   console.log(mendatasave);
  }
  catch(e){
    res.status(404).send(e);
  }  
  
  

})
app.listen(port,(req,res)=>{
    console.log("Connection is successful from the server side");
})
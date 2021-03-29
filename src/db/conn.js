const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/Mensapi",{useNewUrlParser:true,useUnifiedTopology:true,
useFindAndModify:true}).then(()=>console.log("Connection is successful from mongoose side"))
.catch((e)=>console.log("connection failed from mongoose side"));
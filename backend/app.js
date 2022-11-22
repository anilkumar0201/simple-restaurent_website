const express =require('express');
const app=express();
app.use(express.json());
const mongoose=require('mongoose');

const url="mongodb+srv://naveen:Naveen@19@cluster0.tuzp4wk.mongodb.net/?retryWrites=true&w=majority"




// mongoose.connect(url,{newUrlParser:true})
// .then(()=>{console.log("database conncted")})
// .catch((e)=>console.log(e));


app.listen(5000,()=>{
    console.log("server started");
}); 

app.post("/post",async(req,res)=>{
    console.log(req.body);
    const {data}=req.body;


try {
    if(data=="adarsh")
    {
        res.send({status:"ok"});
    }
    else
    {
        res.send({status:"user not found"});
    }
} catch (error) {
    res.send({status:"something went wrong "});
    
}
});
require('./userdetails');


const user=mongoose.model("userInfo");

app.post("./login",async(req,res)=>{
    const {name,password}=req.body;
try {
    await user.create({
        uname:name,
        upassword:password
    });
    res.send({status:"ok"})

    
} catch (error) {
     
    res.send({status:"error"})
}
});
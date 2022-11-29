import express from "express"
const router =express.Router()
import signupSchema from "../models/signup.js"

router.post("/",(req,res)=>{
    const signedupUser= new signupSchema({
        email:req.body.email,
        password:req.body.password,
        confirm:req.body.confirm
    })
    console.log(signedupUser)
    signedupUser.save().then((data)=>res.json(data))//saving data to mongodb
    .catch(err=>console.log(err))
})
export default router;
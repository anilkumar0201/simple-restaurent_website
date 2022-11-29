import express from "express"
const router =express.Router()
import signupSchema from "../models/signup.js"

router.post("/", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    try {
          const user =  await signupSchema.find({email:email});
            if(user.length==0)
                res.send({message:"false1"})
            else if(user[0].password==password)
                res.send({message:"true"})
            else
            res.send({message:"false"})
      }
      catch (e) {
          console.log(e.message);
      }
  })
  

export default router;
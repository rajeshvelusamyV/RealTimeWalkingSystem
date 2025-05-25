const User=require('../models/loginModel');
const adminSetPassword=require('../models/adminPassword')

exports.loginUser=async(req,res)=>{
    const{name,password}=req.body;
    
    const adminpassword=await adminSetPassword.findOne();
   
    try{
        if(password!=adminpassword.password){
            // console.log("wrong");
            return res.status(400).json({message:'password is not correct'})
        }


        const newUser=new User({name:name,password:password});
        await newUser.save();

        res.status(200).json({message:'user created successfully'})
    }
    catch(err){
        return res.status(500).json({error:'login error'});
    }
};
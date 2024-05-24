import User from "../model/UserModel.js"




//posting data into database
export const create=async(req,res)=>{
    try{
        const userData=new User(req.body);
        const{email}=userData;
        const userExist=await User.findOne({email})
        if(userExist){
            return res.status(400).json({message: "User already exist"})
        }
        const savedUser=await userData.save();
        res.status(200).json(savedUser)
    }catch(error){
        res.status(500).json({error:"internal server error"})
    }
}

//for getting all users from the database

export const fetch=async(req,res)=>{
    try{
        const users=await User.find();
        if(users.length===0){
            return res.status(404).json({message:"User not found"})
        }
        res.status(200).json(users);

    }catch(error){
        res.status(500).json({error:"internal server error"})

    }

}
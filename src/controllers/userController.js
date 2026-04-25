import {createUser,updateUser,deleteUser} from '../services/userService.js'

export const addData =async(req,res)=>{
    const user=await createUser(req.body);
    res.status(201).json(user);
}

export const updateData=async(req,res)=>{

    const user=await updateUser(req.params.id,req.body);
    res.status(201).json(user)
}

export const deleteData=async(req,res)=>{
    await deleteUser(req.params.id);
    res.json({message:"deleted successfully"})
}
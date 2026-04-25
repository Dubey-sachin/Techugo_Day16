import User from '../models/userModel.js'

export const createUser= async (data)=>{
    return await User.create(data);
}

export const updateUser= async (id,data)=>{
    return await User.findIdAndUpdate(id, data,{new: true});
}

export const deleteUser= async (id)=>{
    return await User.findByIdAndDelete
}
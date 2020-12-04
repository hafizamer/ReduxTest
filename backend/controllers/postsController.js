import mongoose from 'mongoose';
import PostM from '../models/postsModel.js'

const getPosts= async(req,res)=>{
    try{
        const postMessages= await PostM.find();

        res.status(200).json(postMessages);
    } catch (error){
            res.status(404).json({message: error.message})
        
    }
}

const createPosts= async(req,res)=>{
    const post= req.body;

    const newPost= new PostM(post);
    try{
        await newPost.save();
        res.status(201).json(newPost);
    } catch{
        res.status(409).json({message: error.message});
    }
}

const updatePosts= async(req,res)=>{
    const {id:_id}=req.params;
    const post=req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('ID not found');

    const updatedPost= await PostM.findByIdAndUpdate(_id, post,{new:true});

    res.json(updatedPost);
}

const deletePosts= async(req,res)=>{
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('ID not found');
    await PostM.findByIdAndRemove(id);
    console.log("DELETE!")
    res.json({message: "post deleted"});
}

export{
    getPosts,
    createPosts,
    updatePosts,
    deletePosts
}

import mongoose from 'mongoose';

import PostMessage from '../models/postMessage.js'

//step 2, [create models. refer to readme (client)]. then up to the API from client-side 

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find(); //this takes time, so must be async
        res.status(200).json(postMessages);

    } catch (error) {
        res.status(404).json({ message: error.message});
        //json: a lightweight data-interchange format. 
        //It is easy to read and write and for machines to parse and generate.
    }
}

export const createPost = async (req, res) => {
    const post = req.body;

    const newPost = new PostMessage({...post, creator: req.userId, createdAt: new Date().toISOString()});
    //creator will equal userId that is already given when logging in, or signing up. 
    try {
        await newPost.save()
        res.status(201).json({ newPost});
    } catch (error) {
        res.status(409).json({ message: error });
    }
}

export const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id')

    
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, {...post, _id}, {new:true});
    //new means you get the updated version of the posta
    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id')
    await PostMessage.findByIdAndRemove(id);
    
    // console.log('DELETE')

    res.json({message: 'Post deleted successfully'});
}

export const likePost = async (req, res) => {
    const {id} = req.params;

    if(!req.userId) return res.json({message: 'Unauthenticated'})

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id') //if we do have the post the user wants to like

    const post = await PostMessage.findById(id); //get the actual post

    const index = post.likes.findIndex((id) => id === String(req.userId));

    if(index === -1){ //if id is not at the post like (above)...
        post.likes.push(req.userId);//like the post by pushing user id
    } else{
        post.likes = post.likes.filter((id) => id !== String(req.userId));//dislike the post
        //return array of all likes besides the current users' like
    }

    const updatedPost = await PostMessage.findByIdAndUpdate(id, post, {new: true})
    res.json(updatedPost);
}
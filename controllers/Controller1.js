const db = require('../db');
const { Post, simUser } = require('../models');


const getAllUsers = async (req, res) => {
    try {
        const users = await simUser.find({})
        console.log(users)
        return res.status(200).json({ users })
    } catch (error) {
        return res.status(500).send(error.message);
    } 
}

const simPosts = async (req, res) => {
    try {
        const posts = await simUser.find({ user: 'Elon Musk' })
        console.log(posts)
        return res.status(200).json({ posts })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteUser = async (req,res) => {
    try { 
        await simUser.findOneAndDelete({ _id: req.body._id})
        return res.status(200).json('Succesfully deleted')
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
  }


const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find({})
        console.log(posts)
        return res.status(200).json({ posts })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
const createPost = async (req, res) => {
    try {
        const post = await new Post(req.body)
        console.log(req.body)
        await post.save()
        return res.status(201).json({
            review,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
const deletePost = async (req,res) => {
        try { 
            await Post.findOneAndDelete({ _id: req.body._id})
            return res.status(200).json('Succesfully deleted')
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
      }

const updatePost = async (req,res) => {
    try {
        console.log(req.body)
        const update = await Post.findOneAndUpdate({ _id: req.params.id }, req.body, {new: true})
        await update.save()
        return res.status(200).json(update)
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}


module.exports = {
    getAllPosts,
    createPost,
    getAllUsers,
    deletePost,
    updatePost,
    deleteUser
}
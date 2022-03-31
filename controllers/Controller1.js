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
        await post.save()
        return res.status(201).json({
            review,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

module.exports = {
    getAllPosts,
    createPost,
    getAllUsers
}
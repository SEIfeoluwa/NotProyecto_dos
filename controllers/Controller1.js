const { Post } = require('../models');

const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find({})
        console.log(posts)
        return res.status(200).json({ posts })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllPosts
}
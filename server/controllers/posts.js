const PostMessage = require('../models/postMessage.js')




exports.getPosts = async(req, res) => {

    try {
        const PostMessage = await PostMessage.find();

        res.status(200).json({
            status: 'success',
            results: PostMessage.length,
            data: {
                PostMessage
            }

        });

    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }




}

exports.createPost = async(req, res) => {

    try {
        const newPost = await PostMessage.create(req.body)

        res.status(201).json({
            status: 'success',
            data: {
                newPost
            }
        })

    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }

}
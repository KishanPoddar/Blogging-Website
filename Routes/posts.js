const router = require("express").Router()
const Post = require("../Models/Post")

//CREATE POST
router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savePost = await newPost.save()
        res.status(200).json(savePost);
    } catch (err) {
        res.status(500).json(err);
    }
})


//UPDATE POST
router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {
            try {
                const updatepost = await Post.findByIdAndUpdate(req.params.id, {
                    $set: req.body,
                }, { new: true }
                );
                res.status(200).json(updatepost);
            } catch (err) {
                res.status(500).json(err);
            }
        } else {
            res.status(401).json("You can only update your post!")
        }

    } catch (err) {
        res.status(500).json(err);
    }
})

//DELETE POST
router.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {
            try {
                await post.delete();
                res.status(200).json("Post has been deleted");
            } catch (err) {
                res.status(500).json(err);
            }
        } else {
            res.status(401).json("You can only delete your post!")
        }

    } catch (err) {
        res.status(500).json(err);
    }
})

//GET POST
router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json(err);
    }
})

//GET ALL POST
router.get('/', async (req, res) => {
    const username = req.query.user;
    const catName = req.query.cat;
    try {
        let posts;
        if (username) {
            posts = await Post.find({ username })
        } else if (catName) {
            posts = await Post.find({
                categories: {
                    $in: [catName]
                }
            })
        } else {
            posts = await Post.find();
        }
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json(err);
    }
})

module.exports = router
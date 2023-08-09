const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/authorize');


//Get all comments
router.get("/", (req, res) => {
    Comment.findAll()
        .then((commentDbData) => res.json(commentDbData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

//Create a comment
router.post('/', withAuth, (req, res) => {
    if (req.session) {
        Comment.create({
                comment_text: req.body.comment_text,
                post_id: req.body.post_id,
                user_id: req.session.user_id
            })
            .then(commentDbData => res.json(commentDbData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    }
});


module.exports = router;
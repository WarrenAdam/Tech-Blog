const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/authorize');


router.post('/', async (req,res) => {
try {
    const newUser = await User.create(req.body) 
    req.session.save(() => {
        req.session.user_id = newUser.id
        res.json(newUser);
    })
} catch (error) {
    res.json(error);
}
});

module.exports = router;
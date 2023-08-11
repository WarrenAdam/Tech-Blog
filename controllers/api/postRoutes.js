const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/authorize');

router.post('/', (req,res) => {
    res.send("testing post routes")
    });
    
    module.exports = router;
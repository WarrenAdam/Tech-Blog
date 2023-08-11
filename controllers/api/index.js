const router = require('express').Router();
const userRoutes = require('./userRoutes');
const commentRoutes = require('./commentRoutes');
const postRoutes = require('./postRoutes');


router.use('/comment', commentRoutes);
router.use('/user', userRoutes);
router.use('/post', postRoutes);




module.exports = router;
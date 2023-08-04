const User = require('./users');
const Post = require('./posts');
const Comment = require('./comments');


User.hasMany(Posts, {
    foreignKey: 'user_id'
})

User.hasMany(Comments, {
    foreignKey: 'user_id'
})

Post.belongsTo(Users, {
    foreignKey: 'user_id'
})

Post.hasMany(Comments, {
    foreignKey: 'post_id'
})

Comment.belongsTo(Users, {
    foreignKey: 'user_id'
})

Comment.belongsTo(Posts, {
    foreignKey: 'post_id'
})


module.exports = {
    Users,
    Posts,
    Comments
};
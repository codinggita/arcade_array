const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    friendRequests: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Game' }],
    purchasedGames: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Game' }], // ✅ New field for purchased games
    isOnline: { type: Boolean, default: false } // Track online status
});

const User = mongoose.model('User', userSchema);

module.exports = User;

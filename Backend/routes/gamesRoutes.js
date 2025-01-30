const express = require('express');
const router = express.Router();
const { getAllGames, addToWishlist, getUserWishlist ,removeFromWishlist} = require('../controllers/gameController');

// Route to get all games
router.get('/', getAllGames);

// Route to add a game to the wishlist
router.post('/add', addToWishlist);

// Route to remove a game from the wishlist
router.delete('/remove', removeFromWishlist);

// Route to get a user's wishlist
router.get('/wishlist/:userId', getUserWishlist);

module.exports = router;

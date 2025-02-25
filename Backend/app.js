require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require("http");

const authRoutes = require('./routes/authRoutes');
const friendsRoutes = require('./routes/friendsRoutes');
const gameRoutes = require('./routes/gamesRoutes');

const app = express();
const server = http.createServer(app);  // ✅ Correctly using HTTP server
const port = process.env.PORT || 3000;

// ✅ Proper CORS configuration
const corsOptions = {
    origin: [
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:5174",
        "https://arcadearray.netlify.app", 
        "https://arcade-array.onrender.com"
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); // Handle CORS preflight

// ✅ Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ MongoDB Connection
const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('✅ Connected to MongoDB');
}).catch(err => {
    console.error('❌ MongoDB connection error:', err);
});

// ✅ API Routes
app.use('/api/auth', authRoutes);
app.use('/api/friends', friendsRoutes);
app.use('/api/games', gameRoutes);

// ✅ Default Route
app.get("/", (req, res) => {
    res.send("Welcome to Arcade Array API!");
});

// ✅ Initialize Socket.IO
const io = require("socket.io")(server, {
    cors: { origin: "*" }
});

const onlineUsers = new Map();

io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("userOnline", (userId) => {
        onlineUsers.set(userId, socket.id);
        io.emit("updateOnlineUsers", Array.from(onlineUsers.keys())); 
    });

    socket.on("disconnect", () => {
        const userId = [...onlineUsers.entries()].find(([_, id]) => id === socket.id)?.[0];
        if (userId) onlineUsers.delete(userId);
        io.emit("updateOnlineUsers", Array.from(onlineUsers.keys()));
    });
});

// ✅ FIX: Use `server.listen()` Instead of `app.listen()`
server.listen(port, () => {
    console.log(`🚀 Server running on port ${port}`);
});

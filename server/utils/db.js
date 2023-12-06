const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI;

const connectDb = async () => {
    try {
        await mongoose.connect(URI)
    } catch (error) {
        console.error('Database connection failed.')
        process.exit(0);
    }
}

module.exports = connectDb;
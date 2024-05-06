// mongoDBService.js

import mongoose from 'mongoose';

const connectToMongoDB = async () => {
    try {
        // MongoDB connection string
        const uri = "mongodb+srv://hemendprincess:datingapp@cluster0.8bo6eyo.mongodb.net/?retryWrites=true&w=majority";

        // Connect to MongoDB
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
        throw error;
    }
};

export { connectToMongoDB };

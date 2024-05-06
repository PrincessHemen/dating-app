// Dating.jsx

import React, { useEffect } from 'react';
import './Dating.css';
import { connectToMongoDB } from '../../../services/mongoDBService';

const Dating = () => {
    useEffect(() => {
        const fetchData = async () => {
            try {
                await connectToMongoDB();
                // Connection successful, you can perform operations with Mongoose
            } catch (error) {
                // Handle connection error
                console.error("Error connecting to MongoDB:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="dating-container">
            Dating
        </div>
    );
};

export default Dating;

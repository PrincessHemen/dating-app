// Dating.jsx

import React, { useState, useEffect } from 'react';
import './Dating.css';

const Dating = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/data'); // Assuming this endpoint exists on your Express server
                if (response.ok) {
                    const data = await response.json();
                    setData(data.message);
                    console.log('Data:', data.message);
                } else {
                    console.error('Failed to fetch data');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="dating-container">
            {data ? (
                <div>
                    <h2>Data from server:</h2>
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Dating;

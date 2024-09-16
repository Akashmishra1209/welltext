// src/admin/Dashboard.js

import React,{useState,useEffect} from 'react';
import sanityClient from '@sanity/client';
const Dashboard = () => {
    const client = sanityClient({
        projectId: '2flqhnlp',
        dataset: 'production',
        useCdn: true, // Use the Content Delivery Network for faster response times
    });
    const [blogLength, setblogLength] = useState([]);
    useEffect(() => {
        const fetchblogLength = async () => {
            try {
                const response = await client.fetch(`count(*[_type == "update"])`);
                console.log('Fetched data:', response); // Log fetched data
                setblogLength(response); // Update the state with fetched blogLength
                console.log(blogLength)
            } catch (error) {
                console.error('Error fetching blogLength:', error);
            }
        };

        fetchblogLength();
    }, []);
    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome to the Dashboard.</p>
            <div class="jumbotron jumbotron-fluid bg-white border border-black rounded" style={{ height: "90px", width: "120px" }}>
                <h4 className="text-center text-sm">Total Post {blogLength}</h4>
            </div>
        </div>
    );
};

export default Dashboard;

import React, { useState, useEffect } from 'react';
import sanityClient from '@sanity/client';

const client = sanityClient({
    projectId: '2flqhnlp',
    dataset: 'production',
    useCdn: true, // Use the Content Delivery Network for faster response times
});

export default function New(props) {
    const [blogs, setBlogs] = useState([]);
    let TextStyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
    }
    let myStyle = {
        color: props.mode === 'dark' ? '#ffffff' : '#042743',
        backgroundColor: props.mode === 'dark' ? 'rgb(105,105,105)' : 'white',
    }
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await client.fetch(`*[_type == "update"] | order(_createdAt desc)`);
                console.log('Fetched data:', response); // Log fetched data
                setBlogs(response); // Update the state with fetched blogs
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };

        fetchBlogs();
    }, []);
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    }
    // console.log('State blogs:', blogs); // Log state blogs

    console.log(blogs.sort())
    return (
        <div>
            <h1 style={TextStyle} className='text-center '>All Updates</h1>
            <ul>
                {/* Map through the blogs array and render each blog post */}
                {blogs.map((blog) => (
                    <li key={blog._id} className='list-unstyled  '>
                        <div className="row">
                            <div className="col-sm-6 mt-2 w-100  " >
                                <div className="card mt-4" >
                                    <div className="card-body " style={myStyle}>
                                        <h5 className="card-title">{formatDate(blog.createdAt)}</h5>
                                        <span className="card-text"><b>{blog.name} : </b></span>
                                        <span>{blog.desc}</span> <br />
                                        <a className='btn btn-sm btn-primary mt-1' href={`/update/${blog.slug.current}`}>Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

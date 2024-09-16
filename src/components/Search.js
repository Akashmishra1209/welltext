import React, { useState, useEffect } from 'react';
import sanityClient from '@sanity/client';

const client = sanityClient({
    projectId: '2flqhnlp',
    dataset: 'production',
    useCdn: true,
});

const WellText = (props) => {
    const [blogs, setBlogs] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredBlogs, setFilteredBlogs] = useState([]);

    // Extract search query from URL
    useEffect(() => {
        const currentURL = window.location.href;
        let query = '';
        if (currentURL.includes("http://localhost:3000/search/")) {
            query = currentURL.split("http://localhost:3000/search/")[1];
        } else if (currentURL.includes("https://welltext.vercel.app/search/")) {
            query = currentURL.split("https://welltext.vercel.app/search/")[1];
        }
        setSearchQuery(query);
    }, []);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await client.fetch(`*[_type == "update"] | order(_createdAt desc)`);
                setBlogs(response);
                setFilteredBlogs(response);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };

        fetchBlogs();
    }, []);

    useEffect(() => {
        if (searchQuery) {
            const filtered = blogs.filter((blog) =>
                blog.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                blog.desc.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredBlogs(filtered);
        } else {
            setFilteredBlogs(blogs);
        }
    }, [searchQuery, blogs]);

    let TextStyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
    };
    let myStyle = {
        color: props.mode === 'dark' ? '#ffffff' : '#042743',
        backgroundColor: props.mode === 'dark' ? 'rgb(105,105,105)' : 'white',
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    };

    return (
        <div>
            <h1 style={TextStyle} className='text-center '>Result For <span className='fw-bold'>{searchQuery}</span></h1>
            <ul>
                {filteredBlogs.map((blog) => (
                    <li key={blog._id} className='list-unstyled'>
                        <div className="row">
                            <div className="col-sm-6 mt-2 w-100">
                                <div className="card mt-4">
                                    <div className="card-body" style={myStyle}>
                                        <h5 className="card-title">{formatDate(blog.createdAt)}</h5>
                                        <span className="card-text"><b>{blog.name} : </b></span>
                                        <span>{blog.desc}</span><br />
                                        <a className="btn btn-primary btn-sm" href={`/update/${blog.slug.current}`}>Read More</a>
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

export default WellText;

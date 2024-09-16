import React, { useEffect, useState } from 'react';
import sanityClient from '@sanity/client';
import { PortableText } from '@portabletext/react';
const client = sanityClient({
    projectId: '2flqhnlp',
    dataset: 'production',
    useCdn: true, // Use the Content Delivery Network for faster response times
});

const Post = (props) => {
    // Extract the slug from the URL
    const slug = window.location.pathname.split('/update/')[1];
    console.log(slug);

    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await client.fetch(`*[_type == "update" && slug.current == "${slug}"]`);
                if (response.length > 0) {
                    setPost(response[0]); // Assuming slug is unique and only one post is returned
                }
            } catch (error) {
                console.error('Error fetching blog:', error);
            }
        };
        fetchBlogs();
    }, [slug]);
    let TextStyle = {
        color: props.mode === 'dark' ? '#ffffff' : '#042743',
        // backgroundColor: props.mode === 'dark' ? 'rgb(105,105,105)' : 'white',
    }

    if (!post) {
        return <h1 style={TextStyle}>No Update Found</h1>;
    }

    return (
        <div>
            <h1>{post.name}</h1>
            <PortableText
                value={post.content}
                
            />
        </div>
    );
};

export default Post;

import React, { useState, useEffect } from 'react';
import { Client, Databases, ID } from 'appwrite';
import $ from "jquery"

const Blog = (props) => {
    const [Blogs, setBlogs] = useState([]);
    const client = new Client();
    const [showFullContent, setShowFullContent] = useState(false);

    const toggleContent = () => {
        setShowFullContent(!showFullContent);
    }
    useEffect(() => {
        const fetchData = async () => {
            client
                .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
                .setProject('65ddda2a81f85af0bbb9'); // Your project ID

            const databases = new Databases(client);
            try {
                const response = await databases.listDocuments('65dddb0d4b8098a420cc', '65dddb1ee8196c6c49eb');
                setBlogs(response.documents);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };

        fetchData();
    }, []);

    let myStyle = {
        color: props.mode === 'dark' ? '#ffffff' : '#042743',
        backgroundColor: props.mode === 'dark' ? 'rgb(105,105,105)' : 'white',
    };
    let TextStyle = {
        color: props.mode === 'dark' ? 'white' : 'dark',
    };
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    }


    return (
        <div>
            <h2 style={TextStyle}>All Updates</h2>
            {Blogs.length == 0 ? <p style={TextStyle}>No Updates Found</p> : Blogs.map(blog => (
                <div key={blog.id} className="col-md-4 mb-3 w-100 ">
                    <div className="card" style={myStyle}>
                        <div className="card-body">
                            <h5 className="card-title  ">{formatDate(blog.createdAt)}</h5>
                            <span><b>{blog.title} : </b></span>
                            <span className="card-text">{blog.content}</span><br />
                            <div className="badge badge-primary bg-primary rounded-5 h-100 ">
                                {blog.tag}
                            </div>
                        </div>
                    </div>
                </div>
            ))
            }
        </div>
    );
};

export default Blog;

// import React, { useState, useEffect } from 'react';
// import { Client, Databases, ID } from 'appwrite';

// const Blog = (props) => {
//     const [Blogs, setBlogs] = useState([]);
//     const client = new Client();


//     const databases = new Databases(client);
//     let myStyle = {
//         color: props.mode === 'dark' ? '#ffffff' : '#042743',
//         backgroundColor: props.mode === 'dark' ? 'rgb(105,105,105)' : 'white',
//     }
//     client
//         .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
//         .setProject('65ddda2a81f85af0bbb9') // Your project ID
//         ;

//     const promise = databases.listDocuments('65dddb0d4b8098a420cc', '65dddb1ee8196c6c49eb');

//     promise.then(function (response) {
//         setBlogs(response.documents); // Success
//     })

// }
// return (

//     <div>
//         <h2>All Blogs</h2>
//         <div className="card card-body ">
//             {Blogs.map(blog => (
//                 <div key={blog.id} className="col-md-4 mb-3">
//                     <div className="card" style={myStyle}>
//                         <div className="card-body">
//                             <h5 className="card-title">{blog.title}</h5>
//                             <p className="card-text">{blog.content}</p>
//                         </div>
//                     </div>

//                 </div>
//             ))}
//         </div>
//     </div>
// )
//  }

// export default Blog;
// // '65dddb0d4b8098a420cc', '65dddb1ee8196c6c49eb'

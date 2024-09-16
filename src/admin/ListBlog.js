import React, { useState, useEffect } from 'react';
import sanityClient from '@sanity/client';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

const client = sanityClient({
  projectId: '2flqhnlp',
  dataset: 'production',
  useCdn: true, // Use the Content Delivery Network for faster response times
});

export default function ListBlog() {
  const [blogs, setBlogs] = useState([]);
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
      <h1>All Blogs</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>S. No.</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {blogs.map((blog,index) => (
              <TableRow
                key={blog.slug.current}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {index+1}
                </TableCell>
                <TableCell align="left">{blog.name}</TableCell>
                <TableCell align="right"><Link className="btn btn-primary btn-sm" to={`/update/${blog.slug.current}`} target='_blank'>View</Link></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer></div>
  )
}
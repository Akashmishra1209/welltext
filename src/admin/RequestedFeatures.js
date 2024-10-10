import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

export default function FeaturesRequest() {
  const [featureRequests,setFeatureRequests] = useState([]);
  const fetchFeatureRequests = async () => {
    try {
      const response = await fetch("https://welltext-backend.vercel.app/api/list").then(async(res)=>{
         const resp = await res.json()
         setFeatureRequests(resp)
         console.log(resp)
      });
      
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };
  useEffect(() => {
    fetchFeatureRequests();
  }, []);
  const handleDelete=async(id)=>{
    await fetch(`https://welltext-backend.vercel.app/api/delete/${id}`, {
      method: 'DELETE',
    })
    .then(res => res.text()) // or res.json()
    .then(res => console.log(res))
    fetchFeatureRequests()
  }
  return (
    <div>
      <h1>Requested Features</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>S. No.</TableCell>
              <TableCell align="left">Feature Name</TableCell>
              <TableCell align="center">Description</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {featureRequests.map((feature,index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {index+1}
                </TableCell>
                <TableCell align="left">{feature.featureName}</TableCell>
                <TableCell align="center">{feature.description}</TableCell>
                <TableCell align="right"><button className="btn btn-primary btn-sm" onClick={()=>handleDelete(feature._id)}>Delete</button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
  )
}
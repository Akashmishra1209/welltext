// src/admin/Admin.js
import React,{useEffect} from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Users from './Users';
import Settings from './Settings';
import { isAuthenticated } from './auth';
import Addblog from './Addblog';
import ListBlog from './ListBlog';
import ToDo from './ToDo';


const Admin = () => {
    useEffect(() => {
     document.getElementsByTagName("nav")[0].remove()
    }, [])
    if (!isAuthenticated()) {
        return <Navigate to="/login" />;
    }

    return (
        <div className="d-flex">
            <Sidebar />
            <div className="flex-grow-1 p-3"style={{marginLeft:"100px"}}>
                <Routes>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="users" element={<Users />} />
                    <Route path="settings" element={<Settings />} />
                    <Route path="add" element={<Addblog/>}/>
                    <Route path="list" element={<ListBlog/>}/>
                    <Route path="todo" element={<ToDo/>}/>
                </Routes>
            </div>
        </div>
    );
};

export default Admin;

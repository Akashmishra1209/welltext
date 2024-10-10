// src/admin/Admin.js
import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Users from './Users';
import Settings from './Settings';
import { isAuthenticated } from './auth';
import Addblog from './Addblog';
import ListBlog from './ListBlog';
import ToDo from './ToDo';
import Stopwatch from "./Stopwatch"
import Calculator from "./Calculator"
import BookmarkManager from './BookmarkManager';
import QRCodeGenerator from './QRCodeGenerator';
import Whiteboard from "./Whiteboard"
import { useMediaQuery } from '@mui/material';
import Calendar from './Calendar';
import RequestedFeatures from "./RequestedFeatures"

export default function Admin(){
    const isLargeDevice = useMediaQuery('(min-width:1200px)')

    useEffect(() => {
        isLargeDevice && document.getElementsByTagName("nav")[0]?.remove()
    }, [])
    if (!isAuthenticated()) {
        return <Navigate to="/login" />;
    }

    return (
        <div className="d-flex">
            <Sidebar />
            <div className={`flex-grow-1 ${isLargeDevice&& 'p-3'}`} style={{ marginLeft: isLargeDevice ? "100px" : "0" }}>
                <Routes>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="users" element={<Users />} />
                    <Route path="settings" element={<Settings />} />
                    <Route path="add" element={<Addblog />} />
                    <Route path="list" element={<ListBlog />} />
                    <Route path="todo" element={<ToDo />} />
                    <Route path="stopwatch" element={<Stopwatch />} />
                    <Route path="calculator" element={<Calculator />} />
                    <Route path="bmanager" element={<BookmarkManager />} />
                    <Route path="qrcode" element={<QRCodeGenerator />} />
                    <Route path="whiteboard" element={<Whiteboard />} />
                    <Route path="calendar" element={<Calendar />} />
                    <Route path="requested-features" element={<RequestedFeatures />} />
                </Routes>
            </div>
        </div>
    );
};
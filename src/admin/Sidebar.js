import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { logout } from './auth';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, IconButton, Button, useMediaQuery } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import { AccessAlarm, Bookmark, Calculate, CalendarMonth, Gesture, QrCode } from '@mui/icons-material';
import LogoutIcon from '@mui/icons-material/Logout';
import { Done, Edit, Newspaper, MenuRounded } from '@mui/icons-material';

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  const isLargeDevice = useMediaQuery('(min-width:1200px)')

  const handleClose = () => {
    setOpen(false);
  };

  const handleToggle = () => {
    if (open == true) {
      setOpen(false)
    } else {
      setOpen(true)
    }
  }

  const handleLogout = () => {
    logout();
    window.location.href = "/login";
  };

  return (
    <>
      {!isLargeDevice &&
        <IconButton
          onClick={handleToggle}
          style={{ position: 'fixed', top: 10, left: 150, zIndex: 1300 }} // Keeps the button fixed
        >
          <MenuRounded />
        </IconButton>
      }
      <Drawer variant="persistent" open={open}>
        <div className="d-flex flex-column p-3" style={{ height: '100vh' }}>
          <Typography variant="h6">Admin Panel</Typography>
          <List>
            <ListItem button component={NavLink} to="/admin/dashboard">
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button component={NavLink} to="/admin/list">
              <ListItemIcon>
                <Newspaper />
              </ListItemIcon>
              <ListItemText primary="All Blogs" />
            </ListItem>
            <ListItem button component={NavLink} to="/admin/users">
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Users" />
            </ListItem>
            <ListItem button component={NavLink} to="/admin/settings">
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>
            <Typography variant="h6" className='ml-4'>Apps</Typography>
            <ListItem button component={NavLink} to="/admin/todo">
              <ListItemIcon>
                <Done />
              </ListItemIcon>
              <ListItemText primary="To Do" />
            </ListItem>
            <ListItem button component={NavLink} to="/admin/stopwatch">
              <ListItemIcon>
                <AccessAlarm />
              </ListItemIcon>
              <ListItemText primary="Clock" />
            </ListItem>
            <ListItem button component={NavLink} to="/admin/calculator">
              <ListItemIcon>
                <Calculate />
              </ListItemIcon>
              <ListItemText primary="Calculator" />
            </ListItem>
            <ListItem button component={NavLink} to="/admin/bmanager">
              <ListItemIcon>
                <Bookmark />
              </ListItemIcon>
              <ListItemText primary="Bookmark" />
            </ListItem>
            <ListItem button component={NavLink} to="/admin/qrcode">
              <ListItemIcon>
                <QrCode />
              </ListItemIcon>
              <ListItemText primary="QR Code" />
            </ListItem>
            <ListItem button component={NavLink} to="/admin/whiteboard">
              <ListItemIcon>
                <Gesture />
              </ListItemIcon>
              <ListItemText primary="Whiteboard" />
            </ListItem>
            <ListItem button component={NavLink} to="/admin/calendar">
              <ListItemIcon>
                <CalendarMonth />
              </ListItemIcon>
              <ListItemText primary="Calendar" />
            </ListItem>
            <ListItem button onClick={handleLogout}>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </>
  );
};
import React, { useState } from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Navbar(props) {
  const [searchText, setSearchText] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleQueryChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <>
     <div className='fixed'>We’re enhancing the appearance to make everything look even better!</div>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">WellText</Link>
        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tools">Tools</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/features">Features</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/download">Download</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/updates">Updates</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/editor">Editor</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/board">Whiteboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/terminal">Terminal</Link>
            </li>
            <li className="nav-item">
              <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
                className={`text-${props.mode == 'light' ? 'secondary' : 'white'} text-capitalized`}
                style={{
                  marginTop: "2.5px"
                }}
              >
                More
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem>
                  <Link
                    to={"/fancytext"}
                    className={`text-decoration-none ${props.mode === 'light' ? 'text-black' : 'text-secondary'}`}
                  >
                    Fancy Text
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    to={"/contact"}
                    className={`text-decoration-none ${props.mode === 'light' ? 'text-black' : 'text-secondary'}`}
                  >
                    Contact Us
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    to={"/features-request"}
                    className={`text-decoration-none ${props.mode === 'light' ? 'text-black' : 'text-secondary'}`}
                  >
                    Request Feature
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    to={"/github"}
                    className={`text-decoration-none ${props.mode === 'light' ? 'text-black' : 'text-secondary'}`}
                  >
                    My Profile
                  </Link>
                </MenuItem>
              </Menu>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              id="wordtxt"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchText}
              onChange={handleQueryChange}
            />
            <Link
              className="btn btn-outline-success"
              to={`/search/${searchText}`}
            >
              Search
            </Link>
          </form>
          <div className={`form-check form-switch mx-2 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              onClick={props.togglemode}
              id="flexSwitchCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              Enable Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
}

import React, { useState } from 'react'
import { Link } from 'react-router-dom';
export default function Navbar(props) {
  const [searchText, setsearchText] = useState("")
  const handleQueryChange = (event) => {
    let newtext = event.target.value;
    setsearchText(newtext);
}

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode}  bg-${props.mode} `}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">WellText</Link>
        <button className="navbar-toggler collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/tools">Tools</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/download">Download</Link>
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
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>

          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" id="wordtxt" type="search" placeholder="Search" aria-label="Search" value={searchText} onChange={handleQueryChange} />
            <a className="btn btn-outline-success" type="submit" id='searchbtn' href={`/search/${searchText}`}  >Search</a>
          </form>
          <div className={`form-check form-switch mx-2 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" type="checkbox" role="switch" onClick={props.togglemode} id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}
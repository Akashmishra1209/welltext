import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import { Analytics } from "@vercel/analytics/react"
import New from './components/New';
import React, { useState, useEffect } from 'react';
import Alert from './components/Alert';
import Form from './components/Form';
import { Routes, Route, Navigate } from 'react-router-dom';
import Contact from './components/Contact';
import NotFoundPage from './components/Notfound';
import Tools from './components/Tools';
import Download from './components/Download';
import Post from "./components/slug"
import RichEditor from './components/RichEditor';
import Search from './components/Search';
import WhiteBoard from './components/WhiteBoard';
import Login from './admin/Login';
import Admin from './admin/Admin';
import { isAuthenticated as isAdminAuthenticated } from './admin/auth';
import Userauth from './components/Userauth';
import Account from './components/Account';
import UserAuthProviderComponent from './components/UserAuthProviderComponent';
import Calendar from './components/Calendar';
import { useAuth0 } from '@auth0/auth0-react';
import TerminalComponent from './components/TerminalComponent';
import Todo from './components/Todo';
import GitHubProfile from './components/GithubProfile';
import HomePage from './components/HomePage';
function App() {
  const [alert, setalert] = useState(null);
  const { user, isAuthenticated } = useAuth0()
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setalert(null)
    }, 2500);
  }
  const [mode, setmode] = useState('light')
  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = '#050507';
      showalert("Dark Mode Enabled", "Success")
    }
    else {
      setmode('light')
      document.body.style.backgroundColor = 'white';
      showalert("Light Mode Enabled", "Success")
    }

  }
  useEffect(() => {
    if (isAuthenticated) {
      console.log(user)
    }
  }, [])

  return (
    <>
      <Navbar mode={mode} togglemode={togglemode} />
      <Analytics />
      <main className='container mt-4 min-vh-100' mode={mode}>
        <div className="box fixed-top ">

          <Alert alert={alert} />

        </div>
        <Routes> 
          <Route path="/" element={<HomePage mode={mode} togglemode={togglemode} showalert={showalert} />} />
          <Route path="/tools" element={<Form mode={mode} togglemode={togglemode} showalert={showalert} />} />
          <Route path="/about" element={<About mode={mode} togglemode={togglemode} />} />
          <Route path="/contact" element={<Contact mode={mode} togglemode={togglemode} />} />
          <Route path="/features" element={<Tools mode={mode} togglemode={togglemode} showalert={showalert} />} />
          <Route path="/updates" element={<New mode={mode} togglemode={togglemode} showalert={showalert} />} />
          <Route path="/download" element={<Download mode={mode} togglemode={togglemode} showalert={showalert} />} />
          <Route path="/editor" element={<RichEditor mode={mode} togglemode={togglemode} showalert={showalert} />} />
          <Route path="/board" element={<WhiteBoard mode={mode} togglemode={togglemode} showalert={showalert} />} />
          <Route path="/calendar" element={<Calendar mode={mode} togglemode={togglemode} showalert={showalert} />} />
          <Route path="/userlogin" element={<UserAuthProviderComponent />} />
          <Route path="/signup" element={<UserAuthProviderComponent />} />
          <Route path="/admin" element={isAdminAuthenticated() ? <Admin /> : <Navigate to="/login" />} />
          <Route path="/account" element={<Account />} />
          <Route path="/terminal" element={<TerminalComponent />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/github" element={<GitHubProfile />} />
          <Route path="/admin/*" element={isAdminAuthenticated() ? <Admin /> : <Navigate to="/login" />}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/update/:uid" element={<Post mode={mode} togglemode={togglemode} showalert={showalert} />} />
          <Route path="/search/:query" element={<Search mode={mode} togglemode={togglemode} showalert={showalert} />} />
          <Route path='*' element={<NotFoundPage mode={mode} togglemode={togglemode} />} />
        </Routes>
      </main>
      <footer className={`py-4 text-center text-${mode === 'light' ? 'black' : 'white'}`}>
        <span>Copyright &copy; 2024 </span>
        <a href="https://welltext.vercel.app" className="text-decoration-none">welltext.vercel.app</a>
        <span> All Rights Reserved</span>
      </footer>


    </>
  )
}

export default App;
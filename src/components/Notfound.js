import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = (props) => {
    let myStyle = {
        color: props.mode === 'dark' ? '#ffffff' : '#042743',
        backgroundColor: props.mode === 'dark' ? 'rgb(105,105,108)' : 'white',
    }
    let mainStyle = {
        color: props.mode === 'dark' ? '#ffffff' : '#042743',
        backgroundColor: props.mode === 'dark' ? 'rgb(105,105,108)' : 'white',
        height: '400px'
    }
    return (
        <div className={`container-fluid  d-flex flex-column justify-content-center align-items-center mt-5 `} style={myStyle}>
            <img src='favicon.png' alt="Page Not Found" className="img-fluid mb-4 mt-4" style={{ maxWidth: '30px' }} />
            <div className="text-center" style={mainStyle}>
                <h1 className="display-4 mb-4">Oops!</h1>
                <h2 className="display-5 mb-4">Page Not Found</h2>
                <p className="lead mb-5">The page you're looking for seems to be missing.The Url not Found On WellText.Please Visit Home Page</p>
                <Link to="/" className="btn btn-primary">Go Back to Home</Link>
            </div>
        </div>
    );
};

export default NotFoundPage;

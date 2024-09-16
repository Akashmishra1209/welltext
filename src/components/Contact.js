import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt, fa, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FaGithub } from "react-icons/fa";

export default function ContactUs(props) {
    let iconStyle = {
        marginRight: '0.5rem',
    };

    let TextStyle = {
        color: props.mode === 'dark' ? '#ffffff' : '#042743',
        // backgroundColor: props.mode === 'dark' ? 'rgb(105,105,105)' : 'white',
    }

    return (
        <div className="container my-5">
            <h1 className="my-4" style={TextStyle}>Contact Us</h1>
            <p className="" style={TextStyle}>If You Have Any Suggestions Or Complain About Our Site,Contact Us Now.</p>
            <div style={TextStyle} className='container '>
                <p>
                    <FontAwesomeIcon icon={faEnvelope} style={iconStyle} className='fa-beat' /> <strong>Email:</strong>
                    <a href="mailto: ashish71570@gmail.com" className='text-decoration-none '> ashish71570@gmail.com</a>
                </p>
                <p>
                    <FontAwesomeIcon icon={faPhone} style={iconStyle} className='fa-beat' /> <strong>Phone:</strong> +919983930509</p>
                <p>
                    <FontAwesomeIcon icon={faMapMarkerAlt} style={iconStyle} className='fa-beat' /> <strong>Address:</strong> India
                </p>
                <p>
                    <FaGithub className='fa-beat' /> <strong>GitHub : </strong> <a className='text-decoration-none  ' href="https://github.com/Akashmishra1209">Visit Here</a>
                </p>
                <p>
                    <FontAwesomeIcon className='fa-beat' icon={faCoffee} /> <strong>Buy Me A Coffee : </strong> <a className='text-decoration-none  ' href="https://www.buymeacoffee.com/devak">Visit Here</a>
                </p>
            </div>

        </div>
    );
}

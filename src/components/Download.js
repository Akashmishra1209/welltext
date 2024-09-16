import React from 'react'
import url from "./WellText.apk"

export default function Download(props) {
    let myStyle = {
        color: props.mode === 'dark' ? '#ffffff' : '#042743',
        backgroundColor: props.mode === 'dark' ? 'RGB(16 17 19)' : 'white',
    }
    let TextStyle = {
        color: props.mode === 'dark' ? '#ffffff' : '#042743',
    }
    return (
        <>
            <div className="container mt-3" style={myStyle}>
                <div className={`mt-4 p-5 rounded `} >
                    <h1 id="title" >Download Android APK Of WellText Now</h1>
                    <p id="def">Download the ad-free Android version of WellText today, completely free and without any signup required! Enjoy a seamless writing experience with our intuitive and feature-rich text editor. Whether you're jotting down notes, drafting a blog post, or working on your next novel, WellText offers a clutter-free environment to unleash your creativity. Say goodbye to distractions and hello to productivity with our sleek and user-friendly app. Get started now and elevate your writing game on the go!</p>
                    <a href={url} download={url} className="btn btn-primary btn-lg rounded-pill " type="button">Download Now</a>
                </div>
            </div>
        </>
    )
}

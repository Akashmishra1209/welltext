import React from 'react'

function Alert(props) {
    return (
        props.alert &&
        <div style={{ height: "55px" }}>
            <div className="alert alert-success alert-dismissible fade show mb-4 fixed-top " role="alert" style={{ height: '60px' }}>
                <strong>{props.alert.type} : </strong>{props.alert.msg}
                {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
            </div>
        </div>
    )
}

export default Alert
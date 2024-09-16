import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
export default function Account() {
    const { isAuthenticated } = useAuth0()
    return (
        <div className='text-center bg-black'>
         {isAuthenticated ? "Welcome":<Navigate to="/userlogin"/>}
        </div>
    )
}

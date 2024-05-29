

import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
    const navigate = useNavigate()
    const handleGoHome = () => {
        navigate('/')
    }
  return (
    <div>
          <h1 className='flex justify-center text-red-500 font-bold text-5xl'>Oops! 404 Not Found</h1>
          <button className='flex justify-center text-red-500 font-bold text-5xl' onClick={handleGoHome}>Go Home</button>
    </div>
  )
}

export default Error

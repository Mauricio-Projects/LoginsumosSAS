import React from 'react'

const AuthLayout = ( {children }) => {
  return (
    <div className='flex flex-col items-center justify-center bg-white py-2 px-4'>
      
      <div className='w-full'> {children} </div>
    </div>
  )
}

export default AuthLayout
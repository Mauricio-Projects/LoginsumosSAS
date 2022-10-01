import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'


const PublicLayout = ({ children }) => {
  return (
    <div className='flex flex-col justify-between h-screen'>
      <Navbar />
      <div className='h-full overflow-y-scroll bg-blue-600'>
        <main className='h-full'>{ children }
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default PublicLayout
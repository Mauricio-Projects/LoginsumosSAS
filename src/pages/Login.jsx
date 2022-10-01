import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../media/logo.jpg'


const Login = () => {
  return (
    <div className='flex flex-col w-full justify-center items-center'>
      <div>
        <img src={Logo} alt="logo" />
      </div>
      <h2 className='m-3 text-center text-3xl font-extrabold text-gray-900'>Inicia Sesión en tu cuenta</h2>
      <form className='mt-8 max-w-md' action="">
        <div className=''>
          <input className='appeareance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm m-2' 
          type="email" 
          placeholder='user@email.com' 
          required />
          <input className='appeareance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm m-2'  
          type='password' 
          placeholder='*******' 
          required />
        </div>
        <div className='flex px-2 justify-between font-thin'>
          <div className='m-2'>
            <label htmlFor="recuerdame">
              <input type="checkbox" name='recuerdame'/>
              Recuérdame
            </label>
          </div>
          <div className='m-2'>
            <Link to='/'>
              Olvidaste tu contraseña?
            </Link>
          </div>
        </div>
        <div className='flex justify-center items-center ' >
          <Link to='/admin'>
          <button className='px-9 text-center bg-blue-500 p-2 text-white rounded-lg shadow-md hover:bg-indigo-700 justify-between items-center' type='submit'>
            Iniciar Sesión
          </button>
          </Link>
        </div>
        <div className='text-center'>
        </div>
          <div class="inline-flex justify-center items-center w-full">
            <hr class="my-4 w-64 h-1 bg-gray-300 rounded border-0 dark:bg-gray-700"/>
          <div class=" font-thin absolute left-1/2 px-4 bg-white -translate-x-1/2 dark:bg-gray-900">
              or
        </div>
        </div>
        <div className='flex flex-col justify-center items-center'>
        <button type="button" class=" text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
            <svg class=" mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
              Sign in with Google
          </button>
          <button type="button" class="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
            <svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"></path></svg>
              Sign in with Facebook
          </button>
        </div>

      </form>
    </div>
  )
};

export default Login
import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {
  const { openSignIn } = useClerk()
  const { user } = useUser()

  const navigate = useNavigate()
  const {setShowRecruiterLogin} = useContext(AppContext)

  return (
    <nav className='shadow py-4'>
      <div className='container px-4 2xl:px-20 mx-auto flex justify-between items-center'>
        <img onClick={()=>navigate('/')} className='cursor-pointer' src={assets.logo} alt="logo" />

        {
          user ? (
            <div className="flex items-center gap-4 max-sm:text-sm">
              <Link to="/applications">Applied Jobs</Link>
              <span>|</span>
              <p className='max-sm:hidden'>Hi, {user.firstName + " " + user.lastName}</p>
              <UserButton />
            </div>
          ) : (
            <div className='flex gap-4 max-sm:text-xs'>
              <button onClick={e=>setShowRecruiterLogin(true)} className='text-gray-600'>Recruiter Login</button>
              <button onClick={() => openSignIn()} className='bg-blue-500 text-white px-6 sm:px-9 py-2 rounded-full'>
                Login
              </button>
            </div>
          )
        }
      </div>
    </nav>
  )
}

export default Navbar

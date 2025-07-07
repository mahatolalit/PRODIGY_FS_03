import React from 'react'
import { assets } from '../../assets/assets'
import Image from 'next/image'
import { useAppContext } from '@/context/AppContext'

const Navbar = () => {

  const { router } = useAppContext()

  return (
    <div className='flex items-center px-4 md:px-8 py-3 justify-between border-b'>
      <div className="flex items-center space-x-2 cursor-pointer" onClick={() => router.push('/')}>
        <div className="text-white bg-gradient-to-r from-purple-600 to-pink-500 px-2 py-1 rounded-lg text-xl font-extrabold tracking-tight shadow-md">
          Vix
        </div>
        <span className="text-xl font-bold text-gray-800 dark:text-white">
          Kart
        </span>
      </div>
      <button className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>Logout</button>
    </div>
  )
}

export default Navbar
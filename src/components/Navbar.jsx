import React, { useState } from 'react'
import { FaBarcode } from 'react-icons/fa'
import { FiUser } from 'react-icons/fi'
import { IoSearchOutline } from 'react-icons/io5'
import { TfiShoppingCart } from 'react-icons/tfi'
import { Link } from 'react-router'

const Navbar = () => {
  const [show, setShow]= useState(false)
  
return (

<nav className='py-14  relative'>
  <div className='container flex flex-wrap sm:flex-nowrap items-center sm:justify-between gap-5 sm:gap-0'>
    <Link to="/"><img src="/logo.png" alt="logo" /></Link>
    {/* =============Dekstop nav=============== */}
    <div className='hidden md:block'>
      <ul className='flex gap-10 font-medium text-base text-secondary'>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
   
    <div className='flex items-center text-xl gap-5'>
      <Link>
      <FiUser />
      </Link>
      <Link>
      <IoSearchOutline />
      </Link>
      <Link>
      <TfiShoppingCart />
      </Link>
      <ul className='flex gap-1'>
        <li><Link className='border-2 border-badge hover:bg-red-500 transition-all duration-300 ease-in-out hover:text-white hover:scale-105 hover:shadow-md  text-[16px] px-4 py-1 rounded-xl'>Login</Link></li>
        <li><Link className='border-2 border-badge hover:bg-red-500 hover:text-white transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-md   text-[16px] px-2.5 py-1 rounded-xl'>Sign up</Link></li>
      </ul>      
    </div>
    {
      !show &&( <button onClick={()=> setShow(!show)}  className='md:hidden cursor-pointer'>
        <FaBarcode className='text-2xl' />
      </button> )
    }
  </div>
   {/* ===============Mobile nav=============== */}
     <div className={`md:hidden fixed top-0 ${show ? "translate-x-0" : "translate-x-full" } transition right-0 w-[45%]  pl-7 bg-background`}>
     <div className='py-[60px]'>
      <button onClick={()=> setShow(!show)}><FaBarcode className='text-2xl' /> </button>
      <ul className='flex flex-col items-start gap-10 font-medium text-xl text-secondary'>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
     </div>
    </div>
</nav>
)
}

export default Navbar
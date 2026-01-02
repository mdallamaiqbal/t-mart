import React, { useState } from 'react'
import { FaBarcode } from 'react-icons/fa'
import { FiUser } from 'react-icons/fi'
import { IoSearchOutline } from 'react-icons/io5'
import { TfiShoppingCart } from 'react-icons/tfi'
import { Link, NavLink, useLocation } from 'react-router'

const Navbar = () => {
  const [show, setShow]= useState(false);
  const  location = useLocation();
  const pathname = location.pathname
return (

<nav className='py-14  relative'>
  <div className='container flex flex-wrap sm:flex-nowrap items-center sm:justify-between gap-5 sm:gap-0'>
    <Link to="/"><img src="/logo.png" alt="logo" /></Link>
    {/* =============Dekstop nav=============== */}
    <div className='hidden md:block'>
      <ul className='flex gap-10 font-medium text-base  text-secondary'>
        <li>
          <Link className={`${pathname == "/" && "text-badge"}`} to="/">Home</Link>
        </li>
        <li>
          <Link className={`${pathname == "/shop" && "text-badge"}`} to="/shop">Shop</Link>
        </li>
        <li>
          <Link className={`${pathname == "/about" && "text-badge"}`} to="/about">About</Link>
        </li>
        <li>
          <Link className={`${pathname == "/contact" && "text-badge"}`} to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
   
    <div className='flex items-center text-secondary font-medium text-xl gap-5'>
      <Link>
      <FiUser />
      </Link>
      <Link>
      <IoSearchOutline />
      </Link>
      <Link>
      <TfiShoppingCart />
      </Link>
      <ul className='flex gap-1 text-secondary font-medium'>
        <li><NavLink to="/log" className={({ isActive }) => `border-2 px-4 py-1 rounded-xl text-[14px] transition-all duration-300 ease-in-out
         ${isActive
          ? "bg-red-500 text-white border-badge"
          : "border-badge active:bg-red-500 active:text-white active:scale-105 active:shadow-md"}`
        }>Login</NavLink>
        </li>
        <li><NavLink to="/signup" className={({ isActive }) => `border-2 px-2.5 py-1 rounded-xl text-[14px] transition-all duration-300 ease-in-out
         ${isActive
          ? "bg-red-500 text-white border-badge"
          : "border-badge active:bg-red-500 active:text-white active:scale-105 active:shadow-md"}`
         }>Sign up</NavLink>
        </li>
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
      <button onClick={()=> setShow(!show)}><FaBarcode className='text-2xl  ' /> </button>
      <ul className='flex flex-col gap-10 font-medium text-xl text-secondary'>
        <li>
          <Link to="/" className='block w-full text-secondary pl-1  rounded transition-colors duration-200 hover:bg-badge hover:text-white ' onClick={() => setShow(false)}>Home</Link>
        </li>
        <li>
          <Link to="/shop" className='block w-full text-secondary pl-1  rounded transition-colors duration-200 hover:bg-badge hover:text-white '  onClick={() => setShow(false)}>Shop</Link>
        </li>
        <li>
          <Link to="/about" className='block w-full text-secondary pl-1 rounded transition-colors duration-200 hover:bg-badge hover:text-white '  onClick={() => setShow(false)}>About</Link>
        </li>
        <li>
          <Link to="/contact" className='block w-full text-secondary pl-1 rounded transition-colors duration-200 hover:bg-badge hover:text-white ' onClick={() => setShow(false)}>Contact</Link>
        </li>
      </ul>
     </div>
    </div>
</nav>
)
}

export default Navbar
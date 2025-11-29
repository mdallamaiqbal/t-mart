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
  <div className='container flex justify-center gap-8 md:gap-20 md:justify-between '>
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
     {/* ==============Mobile nav end=============== */}
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
    </div>
    {
      !show &&( <button onClick={()=> setShow(!show)}  className='md:hidden cursor-pointer'>
        <FaBarcode className='text-2xl' />
      </button> )
    }
     
  </div>

</nav>
)
}

export default Navbar
import React from 'react'
import { FaArrowRight, FaGooglePlus } from 'react-icons/fa'
import { MdEmail, MdLocationPin, MdPhoneInTalk } from 'react-icons/md'
import { RiFacebookCircleLine } from 'react-icons/ri'
import { TiSocialInstagram, TiSocialTwitterCircular } from 'react-icons/ti'
import { Link } from 'react-router'

const Footer = () => {
return (
<footer>
  <div className="container bg-background">
    <div className='px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 pt-[74px] pb-16 gap-6'>
      <div>
        <Link>
        <img src="/logo.png" alt="" />
        </Link>
        <div className='flex gap-5 mt-7'>
          <MdLocationPin className='text-xl' />
          <p className='font-normal text-sm text-secondary '>
            194 Main Md T, Allama Iqbal
            VIC 3057, USA
          </p>
        </div>
        <div className='flex gap-5 mt-7'>
          <MdEmail className='text-xl' />
          <p className='font-normal text-sm text-secondary '>
            info@example.com
          </p>
        </div>
        <div className='flex gap-5 mt-7'>
          <MdPhoneInTalk className='text-xl' />
          <p className='font-normal text-sm text-secondary '>
            +888 01 00 000 000
          </p>
        </div>
        <div className='flex gap-5 text-2xl pt-5 text-price'>
          <Link>
          <TiSocialTwitterCircular />
          </Link>
          <Link>
          <TiSocialInstagram />
          </Link>
          <Link>
          <RiFacebookCircleLine />
          </Link>
          <Link>
          <FaGooglePlus />
          </Link>
        </div>
      </div>
      <div>
        <h2 className='text-lg font-medium text-primary'>Categories</h2>
        <ul className='flex flex-col gap-2.5 mt-7 text-sm font-normal text-secondary'>
          <li>
            <Link>Men</Link>
          </li>
          <li>
            <Link>Women</Link>
          </li>
          <li>
            <Link>Accessories</Link>
          </li>
          <li>
            <Link>Shoes</Link>
          </li>
          <li>
            <Link>Dress</Link>
          </li>
          <li>
            <Link>Denim</Link>
          </li>
        </ul>
      </div>
      <div>
        <h2 className='text-lg font-medium text-primary'>Information</h2>
        <ul className='flex flex-col gap-2.5 mt-7 text-sm font-normal text-secondary'>
          <li>
            <Link>About Us</Link>
          </li>
          <li>
            <Link>Contact Us</Link>
          </li>
          <li>
            <Link>Terms & Conditions</Link>
          </li>
          <li>
            <Link>Returns & Exchanges</Link>
          </li>
          <li>
            <Link>Shipping & Delivery</Link>
          </li>
          <li>
            <Link>Privacy Policy</Link>
          </li>
        </ul>
      </div>
      <div>
        <h2 className='text-lg font-medium text-primary'>Newsletter</h2>
        <p className='text-sm font-normal text-primary mt-7'>Subscribe to our newsletter and get 10% off your first
          purchase .</p>

        <div className='border-2 border-secondary mt-3.5 flex bg-white '>
          <input type="email" placeholder='Email Address' className='py-2.5 px-5 w-full border-r-2 border-secondary ' />
          <button className='px-4 '>
            <FaArrowRight /></button>
        </div>

      </div>
    </div>
    <div className='flex flex-wrap justify-between py-5 border-t border-price gap-3'>
      <p className='text-sm text-secondary font-normal'>© 2025 your website name All Right Reserved.</p>
      <ul className='flex items-center gap-7 text-sm text-secondary font-normal'>
        <li><Link>Home</Link></li>
        <li><Link>Product</Link></li>
        <li><Link>Contact Us</Link></li>
      </ul>
    </div>
  </div>
</footer>
)
}

export default Footer
import React from 'react'
import Banner from '../components/UI/Banner'
import { Link } from 'react-router'
import { FaRegHeart } from 'react-icons/fa'
import { RxUpdate } from 'react-icons/rx'
import { TbTruckDelivery } from 'react-icons/tb'
import { LuClock3 } from "react-icons/lu";
const About = () => {
  return (
    <div>
       <Banner title="About Us" path="Shop page" />

       <div className='container'>
          <div className='text-center mt-[100px]'>
            <h3 className='font-normal text-xl md:text-3xl mb-8 text-primary'>Welcome To Tmart Store</h3>
            <p className='font-normal text-sm md:text-base max-w-[700px] leading-relaxed mx-auto text-price'>We are delighted to have you here. At Tmart, we are dedicated to providing high-quality products, great value, and a smooth shopping experience for every customer. Whether you’re looking for daily essentials or something special, we offer a wide variety of items to meet your needs. Thank you for choosing Tmart Store — we hope you enjoy your shopping with us!
            </p>
            <Link to="/contact"><button className='font-normal text-base text-product-title mt-8 mb-16 py-2 px-5 border border-price hover:bg-badge transition duration-300 hover:hover:border-transparent hover:text-white'>CONTACT US</button>
            </Link>
          </div>
           <div className=' bg-[#f7f7f8] mb-10 p-20 max-w-[1000px] sm:mx-auto'>
            <h3 className='  text-xl md:text-3xl text-product-title font-normal pb-6'>Why Choose Us?</h3>
            <div className='grid grid-cols-1 md:grid-cols-2  gap-10  lg:gap-5'>
              <div>
                <div className='flex gap-4 items-center'>
                   <div className='text-xl md:text-2xl text-product-title font-normal'><FaRegHeart/></div>
                   <h4 className='text-xl md:text-2xl text-product-title font-normal'>Free Gift Box</h4>
                </div>
                <p className=' text-base text-secondary ml-10 sm:w-[300px]'>Enjoy a Free Gift Box with Your Purchase</p>
               </div>
              <div>
                <div className='flex gap-4 items-center'>
                   <div className='text-xl md:text-2xl text-product-title font-normal'><RxUpdate /></div>
                   <h4 className='text-xl md:text-2xl text-product-title font-normal'>Money Back</h4>
                </div>
                <p className=' text-base text-secondary ml-10 sm:w-[300px]'>Guaranteed Money Back If You’re Not Satisfied</p>
               </div>
              <div >
                <div className='flex gap-4 items-center'>
                   <div className='text-xl md:text-2xl text-product-title font-normal'><TbTruckDelivery /></div>
                   <h4 className='text-xl md:text-2xl text-product-title font-normal'>Free Delivery</h4>
                </div>
                <p className=' text-base text-secondary ml-10 sm:w-[300px]'>Shop Now And Avail Free Delivery Today</p>
               </div>
              <div  > 
                <div className='flex gap-4 items-center'>
                   <div className='text-xl md:text-2xl text-product-title font-normal'><LuClock3  /></div>
                   <h4 className='text-xl md:text-2xl text-product-title font-normal'>Support 24/7</h4>
                </div>
                <p className=' text-base text-secondary ml-10 sm:w-[300px]'>Reliable 24/7 Customer Support for Every Need</p>
               </div>
            </div>
           </div>

           <div className='text-center mt-[100px] my-[50px]'>
              <h3 className='font-medium text-xl pb-8 text-primary md:text-3xl'>OUR DEVELOPERS</h3>
              <p className='font-normal text-sm md:text-base leading-relaxed text-price max-w-[700px] mx-auto'>Talented Developers Creating Exceptional Experiences — A team of four highly skilled experts collaborated with dedication and creativity to design and build this e-commerce platform, ensuring a seamless, user-friendly, and innovative shopping experience for every customer.</p>
           </div>
           
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5  justify-items-center  mb-14 bg-price p-5'> 

           <div className="relative w-[300px] h-[350px]  overflow-hidden group">
                <img src="/allama.jpg"  className="w-full h-full object-cover rounded-3xl " alt="iqbal" />
                <div className="absolute bottom-0 l right-0 w-[85%] left-1/2  -translate-x-1/2 h-1/5 bg-gray-800 bg-opacity-80 flex items-center justify-center p-4 rounded-3xl transition-transform duration-500 transform translate-y-full group-hover:-translate-y-1/6 "><h3 className="text-white text-xl font-semibold  mb-2 text-center">
          MD ALLAMA IQBAL
        </h3>
        </div>
           </div>
           <div className="relative w-[300px] h-[350px] overflow-hidden group">
                <img src="/Shihab.JPG"  className="w-full h-full object-cover rounded-3xl" alt="Shihab" />
                <div className="absolute bottom-0 l right-0 w-[85%] left-1/2  -translate-x-1/2 h-1/5 
             
            
             bg-gray-800 bg-opacity-80 flex items-center justify-center p-4 
             rounded-3xl transition-transform duration-500 transform translate-y-full group-hover:-translate-y-1/6 ">
            <h3 className="text-white text-xl font-semibold  mb-2 text-center">
            MD SHIHAB AHAMMED </h3>
        </div>
           </div>
           <div className="relative w-[300px] h-[350px] overflow-hidden group">
                <img src="/jakir.jpg"  className="w-full h-full object-cover rounded-3xl" alt="Jakir" />
                <div className="absolute bottom-0 l right-0 w-[85%] left-1/2  -translate-x-1/2 h-1/5 bg-gray-800 bg-opacity-80 flex items-center justify-center p-4 rounded-3xl transition-transform duration-500 transform translate-y-full  group-hover:-translate-y-1/6 "><h3 className="text-white text-xl font-semibold  mb-2 text-center">MD JAKIR HOSSAIN </h3>
        </div>
           </div>
           <div className="relative w-[300px] h-[350px] overflow-hidden group">
                <img src="/shakib.jpg"  className="w-full h-full object-cover rounded-3xl " alt="Shakib" />
                <div className="absolute bottom-0 l right-0 w-[85%] left-1/2  -translate-x-1/2 h-1/5 bg-gray-800 bg-opacity-80 flex items-center justify-center p-4 rounded-3xl transition-transform duration-500 transform translate-y-full group-hover:-translate-y-1/6 "><h3 className="text-white text-xl font-semibold  mb-2 text-center">
          MD SHAKIB AHMMED JOTI
        </h3>
        </div>
           </div>

           </div>
       </div>
    </div>
  )
}

export default About

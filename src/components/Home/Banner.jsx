import React from 'react'
import { Link } from 'react-router'

const Banner = () => {
  return (
  
  <section className="container bg-[url('/banner.png')]  bg-no-repeat bg-cover h-[250px] sm:h-[350px] md:h-[580px]">
    <div className="flex flex-col justify-start items-center h-full w-full md:justify-center md:w-1/2 md:items-start p-10 md:p-0 lg:w-[25%]  lg:ml-auto 
    xl:w-5/12 xl:ml-auto  ">
     <h1 className='text-base sm:text-xl xl:text-3xl font-normal md:pl-12 lg:pl-0 text-primary'>Awesome Product Collection</h1>
     <h2 className='text-sm xl:text-3xl font-normal pr-[150px] sm:pr-0 md:pl-12 lg:pl-0 text-primary'>In 2022</h2>
     <Link className='text-sm xl:text-xl font-medium pr-[120px] sm:pr-0 md:pl-12 lg:pl-0 text-primary lg:pt-4' to="/shop">shop now _</Link>
    </div>
    
  </section>
  )
}

export default Banner

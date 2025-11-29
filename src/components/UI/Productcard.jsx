import React from 'react'
import { Link } from 'react-router'

const Productcard = ({data}) => {
  return (
    <div className=' bg-white '>
      
      <Link to={`/shop/${data.id}`}><img src={data?.thumbnail} className='w-full'  alt={data?.title} />
      <p className='text-product-title text-center  '>
        {data?.title}
        </p>
      <div className='flex justify-center gap-2.5'>
    
        <p className='text-price  text-base font-normal'><del>{data?.price + 50}</del></p>
        <p className='text-badge  text-base font-normal'>{data?.price}</p>
      </div>
      </Link>
      
    </div>
  )
}

export default Productcard

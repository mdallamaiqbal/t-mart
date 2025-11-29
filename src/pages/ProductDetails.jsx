import React, { useEffect, useState } from 'react'
import Banner from '../components/UI/Banner'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { FaPlayCircle, FaRegStar } from 'react-icons/fa';
import { FaArrowRight, FaGooglePlus } from 'react-icons/fa'
import { MdEmail, MdLocationPin, MdPhoneInTalk } from 'react-icons/md'
import { RiFacebookCircleLine } from 'react-icons/ri'
import { TiSocialInstagram, TiSocialTwitterCircular } from 'react-icons/ti'
import { useParams, Link } from 'react-router'

import axios from 'axios';


const ProductDetails = () => {
let [Quantity, setQuantity]=useState(1);
const [productData, setProductData] = useState({});
const [loading, setLoading]=useState(true);
const [images, setimages]=useState([]);
const params = useParams()


useEffect(()=>{
  axios.get(`https://dummyjson.com/products/${params.id}`).then((res)=>{
    setProductData(res.data);
   const imgData= res.data.images.map((items) =>{
      return{
        original: items,
        thumbnail: items,
      }
    });
    setimages(imgData)
    setLoading(false)
  })
}, [])

return (
<>
  <Banner title="Product Details" path="Product Details" />
  <section className='py-30'>
    <div className='container grid grid-cols-1 md:grid-cols-2 gap-10'>
      <div>
        <ImageGallery items={images} thumbnailPosition='left' />
      </div>
      <div>
        <h2 className='text-3xl font-medium text-primary'>{productData.title}</h2>
        <div className='flex gap-2 text-sm   mt-2.5 items-center'>
          <div className='flex gap-2 text-amber-500'>
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
          </div>
          <p>({productData.rating})</p>
        </div>
        <p className='text-sm text-secondary mt-6 max-w-[539px] pb-3.5'>{productData.description}</p>
        <h3 className='text-badge text-2xl mt-1'>${productData.price}</h3>
        <div className='py-4 flex gap-2'>
          <p>Stock :</p>
          <div>
            {productData.stock}
          </div>
        </div>
        <div>
          <h3 className='pb-2.5'>Size</h3>
          <div className='flex pb-4 gap-4 text-lg'>
            <button>S</button>
            <button>M</button>
            <button>L</button>
            <button>XL</button>
          </div>
        </div>
        <div className='flex gap-5'>
          <h3>Quantity :</h3>
          <div>
            <button onClick={()=> setQuantity(--Quantity)}>-</button>
            <span className='mx-4'>{Quantity}</span>
            <button onClick={()=> setQuantity(++Quantity)}>+</button>
          </div>

        </div>

        <div>
          <button className='mt-8 py-3 px-10 text-sm font-normal  border-2 border-price'>Buy Now</button>
        </div>

        <div className='flex gap-5 text-xl items-center  pt-5 text-secondary'>
          <h4>Share :</h4>
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
           
    </div>
    <div className='container'>
        <div className='mt-[100px] border-b-2 border-secondary pb-6' >
        <ul className='flex justify-center gap-16 text-xl sm:text-2xl text-primary'>
          <li><Link className=' active:border-b-2 border-red-600 transition duration-300 ' >Description</Link></li>
          <li><Link className=' active:border-b-2 border-red-600 transition duration-300 ' >Data sheet</Link></li>
          <li><Link className=' active:border-b-2 border-red-600 transition duration-300  '>Reviews</Link></li>
        </ul>
      </div>

      <div className='mt-[60px]'>
        <h4 className='text-2xl pb-9 font-normal text-secondary'>Details</h4>
         
      <p className='text-sm text-price pb-[53px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis noexercit
ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id.</p>

 <h4 className='text-2xl pb-9 font-normal  text-secondary'>Features</h4>
         <span>
        <div  className='flex gap-2 text-xl items-center  pt-5 text-secondary'>
           <Link className='text-sm'> <FaPlayCircle/> </Link>
         <p className='text-base'>Duis aute irure dolor in reprehenderit in voluptate velit esse</p>
        </div>
        <div  className='flex gap-2 text-xl items-center  pt-5 text-secondary'>
           <Link className='text-sm'> <FaPlayCircle/> </Link>
         <p className='text-base'>Irure dolor in reprehenderit in voluptate velit esse</p>
        </div>
        <div  className='flex gap-2 text-xl items-center  pt-5 text-secondary'>
           <Link className='text-sm'> <FaPlayCircle/> </Link>
         <p className='text-base'>Sed do eiusmod tempor incididunt ut labore et</p>
        </div>
        <div  className='flex gap-2 text-xl items-center  pt-5 text-secondary'>
           <Link className='text-sm'> <FaPlayCircle/> </Link>
         <p className='text-base'>Nisi ut aliquip ex ea commodo consequat.</p>
        </div>
         </span>
      </div>
       </div>
  </section>
</>
)
}

export default ProductDetails
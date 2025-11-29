import React, { useEffect, useState } from 'react'
import Productcard from '../UI/Productcard'
import axios from 'axios';
import Skeleton from '../UI/Skeleton';
const Product = () => {
const [products, setproducts] = useState([]);
const [loading,setloading] = useState(true);
const [catagories, setcatagories] = useState([
"all",
"furniture",
"womens-bags",
"home-decoration",
"kitchen-accessories"
])
const [selectcatagories , setselectcatagories] = useState("")

useEffect(()=>{
setloading(true);
axios.get(`https://dummyjson.com/products${selectcatagories && "/category/" + selectcatagories}?limit=35`).then
((res)=>{
setproducts(res.data.products);
setloading(false);
});
},[selectcatagories])
return (
<section className='py-32'>
  <div className='container'>
    <div className='flex flex-col gap-5 sm:gap-0 sm:flex-row sm:justify-between'>
      <ul className='flex flex-wrap  gap-6 text-base text-normal text-secondary sm:pl-14'>
        {
        catagories.map((item)=>(
        <li key={item}><button onClick={()=>{
            setselectcatagories(item == "all" ? "" : item)
            }} className={`capitalize cursor-pointer ${item == selectcatagories && "text-badge"} `}>{item}</button></li>
        ))
        }
      </ul>
      <button className='text-base text-normal text-secondary text-start pr-14'>FILTER</button>
    </div>
    {loading ?(
    <Skeleton />
    ):(
    <div
      className='px-5 py-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 bg-background gap-x-7 gap-y-[60px] mt-[60px]'>
      {products.map((item)=>(
      <Productcard key={item.id} data={item} />))}
    </div>
    )}
  </div>
</section>
)
}

export default Product
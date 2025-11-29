import React, { useEffect, useState } from 'react'
import Productcard from '../UI/Productcard'
import axios from 'axios';
import Skeleton from '../UI/Skeleton';

const Popular = () => {
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
axios.get(`https://dummyjson.com/products${selectcatagories && "/category/" + selectcatagories}?limit=10`).then
((res)=>{
setproducts(res.data.products);
setloading(false);
});
},[selectcatagories])

return (
<section className='mt-24 '>
    <div className="container pt-24 pb-5 bg-background">
        <h2 className='text-center text-2xl lg:text-3xl font-normal text-primary'>Popular Products</h2>
        <p className='text-center mx-w-[750px] m-auto pt-2 lg:pt-7 py-20 text-base font-normal text-secondary'>Lorem
            ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod temp incididunt ut labore et
            dolore magna aliqua.</p>
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
            <button className='text-base text-normal text-secondary  text-start pr-14'>FILTER</button>
        </div>
        {loading ?(
        <Skeleton />
        ):(
        <div className='px-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-7 gap-y-[60px] mt-[60px]'>
            {products.map((item)=>(
            <Productcard key={item.id} data={item} />))}
        </div>
        )}
    </div>
</section>
)
}

export default Popular
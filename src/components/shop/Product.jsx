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
"kitchen-accessories",
"smartphones",
"laptops",
"mobile-accessories"
])
const [selectcatagories , setselectcatagories] = useState("");
const [pagenation, setPagenation] = useState({
  total: 0,
  skip: 0,
  limit:15
})

useEffect(() => {
  setloading(true);

axios.get(`https://dummyjson.com/products${selectcatagories && "/category/" + selectcatagories}?limit=${pagenation.limit}&skip=${pagenation.skip}`).then
((res)=>{
setproducts(res.data.products);
setPagenation({
   total: res.data.total,
  skip: res.data.skip,
  limit: res.data.limit
})
setloading(false);
});
},[selectcatagories, pagenation.skip, pagenation.limit])
return (
<section className='py-32'>
  <div className='container'>
    <div className='flex flex-col items-center gap-5 sm:gap-2 sm:flex-row justify-between'>
      <ul className='flex flex-wrap  gap-6 text-base text-normal text-secondary sm:pl-14'>
        {
        catagories.map((item)=>(
        <li key={item}><button onClick={()=>{
            setselectcatagories(item == "all" ? "" : item);
              setPagenation(prev => ({...prev,skip: 0,limit: 15}));
            }} className={`capitalize cursor-pointer ${(item === "all" && selectcatagories === "")||
           item === selectcatagories ? "text-badge": ""} `}>{item}</button></li>
        ))
        }
      </ul>
      <select onChange={(e)=> setPagenation((prev)=>({...prev,limit: Number(e.target.value), skip: 0}) ) } className=' text-base bg-[#f5f5f5] text-normal text-secondary text-start '>
        <option value="15">Select</option>
        <option disabled={pagenation.total < 25}  >25</option>
        <option disabled={pagenation.total < 45} value="45">45</option>
        <option disabled={pagenation.total < 65} value="65">65</option>
      </select>
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

    <div className='flex justify-center items-center space-x-2 mt-4'>
      <button  disabled={pagenation.skip === 0} onClick={()=> setPagenation(prev => ({...prev,skip: Math.max(prev.skip - prev.limit, 0)}))} className='px-3 py-1 disabled:opacity-50 disabled:cursor-not-allowed rounded-md border text-gray-700 border-gray-400 hover:bg-gray-100 '>Prev</button>
      <button  disabled={pagenation.skip + pagenation.limit >= pagenation.total} onClick={()=> setPagenation((prev)=>({...prev,skip:  Math.min(prev.skip + prev.limit, prev.total - prev.limit)}))} className='px-3 py-1 disabled:opacity-50 rounded-md border text-gray-700 border-gray-400 hover:bg-gray-100 '>
      Next</button>
    </div>
  </div>
</section>
)
}

export default Product
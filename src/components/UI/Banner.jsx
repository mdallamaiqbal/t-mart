import React from 'react'
import { Link } from 'react-router'

const Banner = ({title, path}) => {
  return (
    <section className='container bg-[url("/bannner2.png")] py-28'>
        <div className='text-center'>
            <h2 className='text-4xl text-primary '>{title}</h2>
            <div className='flex items-center gap-2 justify-center mt-6'>
                <Link to="/">Home</Link>
               <p> / {path}</p>
            </div>
           
        </div>

    </section>
  )
}

export default Banner

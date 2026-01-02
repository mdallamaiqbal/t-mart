import React from 'react'
import Banner from '../components/UI/Banner'
import { SlLocationPin } from "react-icons/sl"
import { MdOutlinePhoneAndroid } from "react-icons/md"
import { MdOutlineEmail } from "react-icons/md"
const Contact = () => {

  const map ="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233370.30409670217!2d88.86666250467707!3d23.945902374888647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39febca82f6a21ed%3A0x4040980d7c6874f8!2sKushtia%20District!5e0!3m2!1sen!2sbd!4v1757084448135!5m2!1sen!2sbd"
  return (
    <div className='mt-7'>
       <Banner title="Contact" path="Contact Us" />

       <div className='mt-[100px]  flex flex-col lg:flex-row justify-center gap-5 pl-5 lg:pl-0 '>
        <div>
          <h2 className='text-3xl font-normal text-secondary'>contact info</h2>
          <div className='flex items-center gap-5 mt-[30px]'>
            <div className='border border-price rounded-4xl flex justify-center items-center text-3xl w-[60px] h-[60px] '><SlLocationPin /></div>
            <div><h4 className='text-2xl font-normal text-secondary'>Location :</h4>
            <p className='text-price font-normal text-base cursor-pointer hover:text-badge'>NS Road, KUSHTIA</p></div>
          </div>
          <div className='flex lg:justify-center flex-col sm:flex-row sm:gap-[50px]'>
              <div className='flex items-center gap-5 mt-[30px]'>
            <div className='border border-price rounded-4xl flex justify-center items-center text-3xl w-[60px] h-[60px] '>
             <MdOutlinePhoneAndroid />
            </div>
            <div><h4 className='text-2xl font-normal text-secondary'>Phone :</h4>
            <p className='text-price font-normal text-base cursor-pointer hover:text-badge'>+888 010 345 697</p></div>
          </div>
            <div className='flex  items-center gap-5 mt-[30px]'>
            <div className='border border-price rounded-4xl flex justify-center items-center text-3xl w-[60px] h-[60px] '><MdOutlineEmail />
            </div>
            <div><h4 className='text-2xl font-normal text-secondary'>Mail :</h4>
            <p className='text-price font-normal text-base cursor-pointer hover:text-badge'>t-mart00@gmail.com</p></div>
          </div>
          </div>
           <h4 className='text-3xl font-normal text-secondary mt-[70px]'>Get In Touch</h4>
          <div>
             <ul className='flex flex-col md:flex-row gap-5 mt-8'>
              <li><input type="text" placeholder='Your name*' className='border-b outline-none border-secondary pb-2.5 sm:w-[250px]' /></li>
              <li><input type="mail" placeholder='mail*' className='border-b outline-none border-secondary pb-2.5 sm:w-[250px]' /></li>
             </ul>
              <input type="text" placeholder='Massage' className='border-b outline-none border-secondary mt-8 pb-5  sm:w-[525px]'/>
          </div>
           <button className='font-normal text-base text-product-title mt-8 mb-16 py-2 px-10 border border-price hover:bg-badge transition duration-300 hover:hover:border-transparent hover:text-white'>SEND</button>
        </div>
        <div>
          <iframe className=' md:w-[400px] md:h-[470px]' src={map} loading='lazy'referrerpolicy="no-referrer-when-downgrade" frameborder="0"></iframe></div>
       </div>
    </div>
  )
}

export default Contact

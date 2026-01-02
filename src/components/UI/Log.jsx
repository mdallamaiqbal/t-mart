import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { MdMarkEmailUnread } from 'react-icons/md';

const Log = () => {
  
      const [showPassword, setShowPassword] = useState(false);
    
  
    const [formData, setFormData] = useState({
      email: "",
      password: ""
    });
  
    const [errors, setErrors] = useState({});
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };
  
  
    const validate = () => {
      let newErrors = {};
      if (!formData.email) {
        newErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Invalid email format";
      }  
      if (!formData.password) {
        newErrors.password = "Password is required";
      } else if (formData.password.length < 6) {
        newErrors.password = "Password does not match";
      } 
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
   const navigate = useNavigate()
    const handleSubmit = (e) => {
    e.preventDefault();
  
    if (validate()) {
      alert("Thank you! Log in Successfully 🎉");
      navigate("/"); 
    }
  };
  
  return (
    <div className='container'>
      <div className='bg-[#f5f5f5] md:w-[400px] md:h-[310px] mx-auto mb-12 rounded-xl'>
         <h1 className='text-center font-bold text-xl sm:text-3xl pt-3'>
          Log in
        </h1>
         <form onSubmit={handleSubmit} className='font-normal ml-6 mb-4 space-y-3'>       
            <div className='relative'>
              <label>E-mail</label> <br />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className='bg-white border border-black md:w-[350px] p-2 rounded-[5px]'
                placeholder='Enter Your Email'/>
              <span  className='absolute right-10 top-[35px] cursor-pointer text-xl'>
                <MdMarkEmailUnread />
              </span>
              <p className="text-red-500 text-sm">{errors.email}</p>
            </div>
            <div className='relative'>
              <label>Password</label> <br />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className='bg-white border border-black md:w-[350px] p-2 rounded-[5px]'
                placeholder='Enter Your Password'/>
              <span className='absolute right-10 top-[35px] cursor-pointer text-xl'
                    onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <AiFillEye />  : <AiFillEyeInvisible /> }
              </span>
              <p className="text-red-500 text-sm">{errors.password}</p>
              </div>
              <div className='pt-1 mb-4'>
              <button type='submit'className='font-medium px-7 py-2 md:w-[350px] bg-sky-400 rounded-[5px]'>
                Log in
              </button>
              </div>
            </form>
      </div>
    </div>
  )
}

export default Log

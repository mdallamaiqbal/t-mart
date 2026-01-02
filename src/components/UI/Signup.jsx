import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { FaPhone, FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Signup = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
    confirmPassword: ""
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

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.number) {
      newErrors.number = "Number is required";
    } else if (formData.number.length !== 11) {
      newErrors.number = "Number must be 11 digits";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Minimum 6 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm password required";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Password does not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
 const navigate = useNavigate()
  const handleSubmit = (e) => {
  e.preventDefault();

  if (validate()) {
    alert("Account Created Successfully 🎉");
    navigate("/"); 
  }
};

  return (
    <div className='container'>
      <div className='bg-[#f5f5f5] md:w-[550px] md:h-[590px] mx-auto mb-12 rounded-xl'>
        <h1 className='text-center font-bold text-xl sm:text-3xl pt-3'>
          Create Account
        </h1>

        <form onSubmit={handleSubmit} className='font-normal ml-6 mb-4 space-y-3'>

          <div className='relative'>
            <label>Your Name</label> <br />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className='bg-white border border-black md:w-[500px] p-2 rounded-[5px]'
              placeholder='Enter Your Name'/>
            <span  className='absolute right-10 top-[35px] cursor-pointer text-xl'>
              <FaUserAlt />
            </span>
            <p className="text-red-500 text-sm">{errors.name}</p>
          </div>

          <div className='relative'>
            <label>E-mail</label> <br />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className='bg-white border border-black md:w-[500px] p-2 rounded-[5px]'
              placeholder='Enter Your Email'/>
             <span  className='absolute right-10 top-[35px] cursor-pointer text-xl'>
              <MdEmail />
             </span>
            <p className="text-red-500 text-sm">{errors.email}</p>
          </div>

          <div className='relative'>
            <label>Number</label> <br />
            <input
              type="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
              className='bg-white border border-black md:w-[500px] p-2 rounded-[5px]'
              placeholder='Enter Your Number'/>
            <span  className='absolute right-10 top-[35px] cursor-pointer text-xl'>
              <FaPhone />
            </span>
            <p className="text-red-500 text-sm">{errors.number}</p>
          </div>

          <div className='relative'>
            <label>Password</label> <br />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className='bg-white border border-black md:w-[500px] p-2 rounded-[5px]'
              placeholder='Enter Your Password'/>
            <span
              className='absolute right-10 top-[35px] cursor-pointer text-xl'
              onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <AiFillEye />  : <AiFillEyeInvisible /> }
            </span>
            <p className="text-red-500 text-sm">{errors.password}</p>
          </div>

          <div className='relative'>
            <label>Confirm Password</label> <br />
            <input
              type={showConfirm ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className='bg-white border border-black md:w-[500px] p-2 rounded-[5px]'
              placeholder='Confirm Your Password'/>
               <span
              className='absolute right-10 top-[35px] cursor-pointer text-xl'
              onClick={() => setShowConfirm(!showConfirm)}>
              {showConfirm ? <AiFillEye />  : <AiFillEyeInvisible />}
            </span>
            <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
          </div>

          <div className='pt-1 mb-4'>
            <button type='submit'className='font-medium px-7 py-2 md:w-[500px] bg-sky-400 rounded-[5px]'>
              Sign Up
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Signup;

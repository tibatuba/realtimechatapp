import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GenderCheckbox from './GenderCheckbox';
import useSignup from '../../hooks/useSignup';

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: ''
  });

  const { loading, signup } = useSignup();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value
    }));
  };

  const handleCheckboxChange = (gender) => {
    setInputs((prevInputs) => ({
      ...prevInputs,
      gender
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Inputs: ", inputs); // Debugging form data
    await signup(inputs); // Ensure signup is awaited
  };

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          Signup <span className='text-red-500'>ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label className='block text-base font-bold text-gray-300 mb-2'>
              Full Name
            </label>
            <input 
              type='text' 
              name='fullName' 
              placeholder='Enter full name' 
              value={inputs.fullName} 
              onChange={handleChange} 
              className='w-full input input-bordered h-10'
              required
            />
          </div>
          
          <div className='mb-4'>
            <label className='block text-base font-bold text-gray-300 mb-2'>
              Username
            </label>
            <input 
              type='text' 
              name='username' 
              placeholder='Enter username' 
              value={inputs.username} 
              onChange={handleChange} 
              className='w-full input input-bordered h-10'
              required
            />
          </div>

          <div className='mb-4'>
            <label className='block text-base font-bold text-gray-300 mb-2'>
              Password
            </label>
            <input 
              type='password' 
              name='password' 
              placeholder='Enter password' 
              value={inputs.password} 
              onChange={handleChange} 
              className='w-full input input-bordered h-10'
              required
            />
          </div>

          <div className='mb-4'>
            <label className='block text-base font-bold text-gray-300 mb-2'>
              Confirm Password
            </label>
            <input 
              type='password' 
              name='confirmPassword' 
              placeholder='Confirm password' 
              value={inputs.confirmPassword} 
              onChange={handleChange} 
              className='w-full input input-bordered h-10'
              required
            />
          </div>

          <GenderCheckbox 
            onCheckboxChange={handleCheckboxChange} 
            selectedGender={inputs.gender} 
          />

          <button 
            type='submit' 
            className='w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 flex items-center justify-center'
            disabled={loading}
          >
            {loading ? (
              <svg
                className="animate-spin h-5 w-5 text-white mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v3.5A4.5 4.5 0 008.5 12h-4.5z"
                ></path>
              </svg>
            ) : (
              'Signup'
            )}
          </button>

          <p className='text-center text-gray-300 mt-4'>
            Already have an account?{' '}
            <Link to='/login' className='text-red-500 font-semibold'>
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;

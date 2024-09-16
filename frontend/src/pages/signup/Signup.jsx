import React from 'react';
import GenderCheckbox from './GenderCheckbox';

const Signup = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      {/* Container for the signup form */}
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        {/* Title of the signup form */}
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          Signup <span className='text-red-500'>ChatApp</span>
        </h1>
        <form>
          {/* Username field */}
          <div className='mb-4'>
            <label className='block text-base font-bold text-gray-300 mb-2'>
              Username
            </label>
            <input 
              type='text' 
              placeholder='Enter username' 
              className='w-full input input-bordered h-10'
            />
          </div>

          {/* Password field */}
          <div className='mb-4'>
            <label className='block text-base font-bold text-gray-300 mb-2'>
              Password
            </label>
            <input 
              type='password' 
              placeholder='Enter password' 
              className='w-full input input-bordered h-10'
            />
          </div>

          {/* Confirm Password field */}
          <div className='mb-4'>
            <label className='block text-base font-bold text-gray-300 mb-2'>
              Confirm Password
            </label>
            <input 
              type='password' 
              placeholder='Confirm password' 
              className='w-full input input-bordered h-10'
            />
          </div>

          <GenderCheckbox></GenderCheckbox>
          {/* Signup button */}
          <button 
            type='submit'
            className='w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600'
          >
            Signup
          </button>
          
          {/* Link to login page */}
          <p className='text-center text-gray-300 mt-4'>
            Already have an account?{' '}
            <a href='/login' className='text-red-500 font-semibold'>
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;

//STARTER CODE FOR SIGNUP COMPONENT
// import React from 'react';
// import GenderCheckbox from './GenderCheckbox';

// const Signup = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//       {/* Container for the signup form */}
//       <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//         {/* Title of the signup form */}
//         <h1 className='text-3xl font-semibold text-center text-gray-300'>
//           Signup <span className='text-red-500'>ChatApp</span>
//         </h1>
//         <form>
//           {/* Username field */}
//           <div className='mb-4'>
//             <label className='block text-base font-bold text-gray-300 mb-2'>
//               Username
//             </label>
//             <input 
//               type='text' 
//               placeholder='Enter username' 
//               className='w-full input input-bordered h-10'
//             />
//           </div>

//           {/* Password field */}
//           <div className='mb-4'>
//             <label className='block text-base font-bold text-gray-300 mb-2'>
//               Password
//             </label>
//             <input 
//               type='password' 
//               placeholder='Enter password' 
//               className='w-full input input-bordered h-10'
//             />
//           </div>

//           {/* Confirm Password field */}
//           <div className='mb-4'>
//             <label className='block text-base font-bold text-gray-300 mb-2'>
//               Confirm Password
//             </label>
//             <input 
//               type='password' 
//               placeholder='Confirm password' 
//               className='w-full input input-bordered h-10'
//             />
//           </div>

//           <GenderCheckbox></GenderCheckbox>
//           {/* Signup button */}
//           <button 
//             type='submit'
//             className='w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600'
//           >
//             Signup
//           </button>
          
//           {/* Link to login page */}
//           <p className='text-center text-gray-300 mt-4'>
//             Already have an account?{' '}
//             <a href='/login' className='text-red-500 font-semibold'>
//               Login
//             </a>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Signup;

import React from 'react';

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='h-full w-full bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 border border-gray-100 p-6'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          Login <span className='text-red-500'>ChatApp</span>
        </h1>

        <form>
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

          <button 
            type='submit'
            className='w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600'
          >
            Login
          </button>
          
          <p className='text-center text-gray-300 mt-4'>
            Don't have an account?{' '}
            <a href='/register' className='text-red-500 font-semibold'>
              Register
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;

// STARTER CODE FOR THIS FILE
// import React from 'react';

// const Login = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//       <div className='h-full w-full bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 border border-gray-100 p-6'>
//         <h1 className='text-3xl font-semibold text-center text-gray-300'>
//           Login <span className='text-red-500'>ChatApp</span>
//         </h1>

//         <form>
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

//           <button 
//             type='submit'
//             className='w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600'
//           >
//             Login
//           </button>
          
//           <p className='text-center text-gray-300 mt-4'>
//             Don't have an account?{' '}
//             <a href='/register' className='text-red-500 font-semibold'>
//               Register
//             </a>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;


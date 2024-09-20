import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  // Define state for username, password, and loading
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(""); 
  const [loading, setLoading] = useState(false); // State to manage loading

  // Simulated login function (replace with actual login logic)
  const login = async (username, password) => {
    setLoading(true);
    // Simulate a network request (replace this with actual login logic)
    await new Promise((resolve) => setTimeout(resolve, 2000)); 
    setLoading(false);
  }

  // Define handleSubmit as an async function
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='h-full w-full bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 border border-gray-100 p-6'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          Login <span className='text-red-500'>ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label className='block text-base font-bold text-gray-300 mb-2'>
              Username
            </label>
            <input 
              type='text' 
              placeholder='Enter username' 
              className='w-full input input-bordered h-10'
              value={username} 
              onChange={(e) => setUsername(e.target.value)} // Correctly handle username change
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
              value={password} 
              onChange={(e) => setPassword(e.target.value)} // Correctly handle password change
            />
          </div>

          <button 
            type='submit' 
            className='w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 flex justify-center items-center'
            disabled={loading} // Disable button when loading
          >
            {loading ? (
              <div className="spinner-border animate-spin inline-block w-4 h-4 border-2 rounded-full border-white border-t-transparent"></div>
            ) : (
              "Login"
            )}
          </button>

          <p className='text-center text-gray-300 mt-4'>
            Don't have an account?{' '}
            <Link to='/signup' className='text-red-500 font-semibold'>
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;

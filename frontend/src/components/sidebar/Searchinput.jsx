import { FaSearch } from 'react-icons/fa';

const SearchInput = () => {
  return (
    <form className='flex items-center gap-2'>
      <input 
        type="text" 
        placeholder='Search...' 
        className='input input-bordered rounded-full' 
      />
      <button 
        type='submit'
        className='bg-red-500 text-white p-2 rounded-full'
      >
        <FaSearch className='w-6 h-6 outline-none' />
      </button>
    </form>
  );
};

export default SearchInput;


//STARTER CODE
// import { FaSearch } from "react-icons/fa";
// const Searchinput = () => {
//   return (
//     <form className='flex items-center gap-2'>
//         <input type="text" placeholder='Search...' className='input inpput-bordered rounded-full'/>
//         <button 
//             type='submit'
//             className='w-full bg-red-500 text-white'>
//             <FaSearch className='w-6 h-6 outline-none'/>
//           </button>


//     </form>
//   )
// }

// export default Searchinput
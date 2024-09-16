const Conversation = () => {
    return (
      <>
        <div className='flex gap-2 items-center hover:bg-red-500 rounded p-2 py-1 cursor-pointer'>
          <div className='avatar online'>
            <div>
              <img src="" alt="user avatar" />
            </div>
          </div>
        </div>
        <div className='flex flex-col flex-1'>
          <div className='flex gap-3 justify-between'>
            <p className='font-bold text-gray-200'>John Doe</p>
            <span className='text-xl'></span>
          </div>
        </div>
        <div className='divider my-0 py-0 h-1'></div>
      </>
    );
  };
  
  export default Conversation;
  
//STARTER CODE SNIPPET

// const Conversation = () => {
//     return <>
//       <div className='flex gap-2 items-center hover:bg-red-500 rounded p-2 py-1 cursor-pointer'>
//           <div className='avatar online'>
//               <div>
//                   <img src="" alt="user avatar"/>
//               </div>
  
//           </div>
  
//       </div>
//       <div className='flex flex-col flex-1'>
//           <div className='flex gap-3 justify-between'>
//               <p className='font-bold text-gray-200'>John Doe</p>
//               <span className='text-xl'></span>
//           </div>
//       </div>
//       <div className='divider my-0 py-0 h-1'></div>
//       </>;
  
//   };
  
//   export default Conversation
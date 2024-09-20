import React from 'react';
import useConversationStore from '../../zustand/userConversation'; // Updated import

const Conversation = ({ conversation, lastIdx, emoji }) => {
  const { selectedConversation, setSelectedConversation } = useConversationStore(); // Using the Zustand store

  // Check if the current conversation is selected
  const isSelected = selectedConversation?._id === conversation._id;

  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-red-500 rounded p-2 py-1 cursor-pointer ${
          isSelected ? 'bg-red-500' : ''
        }`}
        onClick={() => setSelectedConversation(conversation)} // Correct function to call
      >
        <div className='avatar online'>
          <div>
            <img
              src={conversation.profilePic}
              alt="user avatar"
            />
          </div>
        </div>
      </div>
      <div className='flex flex-col flex-1'>
        <div className='flex gap-3 justify-between'>
          <p className='font-bold text-gray-200'>{conversation.fullName}</p>
          <span className='text-xl'>{emoji}</span>
        </div>
      </div>
      {lastIdx && <div className='divider my-0 py-0 h-1' />}
    </>
  );
};

export default Conversation;

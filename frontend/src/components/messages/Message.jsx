import { useAuthContext } from '../../context/AuthContext';
import useConversation from '../../zustand/userConversation';

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  
  // Check if the message is from the current user
  const fromMe = message.senderId === authUser._id;
  const formattedTime = extractTime(message.createdAt);

  // Determine CSS classes based on message sender
  const chatClassname = fromMe ? 'chat-end' : 'chat-start';
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? 'bg-red-500' : '';

  return (
    <div className={`chat ${chatClassname}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src={profilePic}
            alt="Profile"
            className="rounded-full"
          />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgColor}`}>
        {message.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">{formattedTime}</div>
    </div>
  );
};

export default Message;

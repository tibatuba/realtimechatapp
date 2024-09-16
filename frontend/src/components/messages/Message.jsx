const Message = () => {
    return (
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              src="https://via.placeholder.com/150"
              alt="Placeholder profile"
              className="rounded-full"
            />
          </div>
        </div>
        <div className={'chat-bubble text-white bg-red-500'}>Hi! Whats up?</div>
        <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12:42</div>
      </div>
    );
  }
  
  export default Message;
  
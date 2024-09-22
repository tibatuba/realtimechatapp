import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/userConversation";
import notificationSound from "../assets/sounds/notification.mp3";

const useListenMessages = () => {
	const { socket } = useSocketContext();
	const { setMessages } = useConversation();

	useEffect(() => {
		const handleMessage = (newMessage) => {
			newMessage.shouldShake = true;
			const sound = new Audio(notificationSound);
			sound.play();
			setMessages((prevMessages) => [...prevMessages, newMessage]);
		};

		socket?.on("newMessage", handleMessage);
		return () => socket?.off("newMessage", handleMessage);
	}, [socket, setMessages]);
};
export default useListenMessages;

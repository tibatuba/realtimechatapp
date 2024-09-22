import { createContext, useState, useEffect, useContext } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";

const SocketContext = createContext();

export const useSocketContext = () => {
	return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
	const [socket, setSocket] = useState(null);
	const [onlineUsers, setOnlineUsers] = useState([]);
	const { authUser } = useAuthContext();

	useEffect(() => {
		if (authUser) {
			const socketInstance = io("https://chat-app-yt.onrender.com", {
				query: { userId: authUser._id },
			});

			setSocket(socketInstance);

			socketInstance.on("getOnlineUsers", (users) => {
				setOnlineUsers(users);
			});

			return () => {
				socketInstance.disconnect();
			};
		} else if (socket) {
			socket.disconnect();
			setSocket(null);
		}
	}, [authUser]);

	return (
		<SocketContext.Provider value={{ socket, onlineUsers }}>
			{children}
		</SocketContext.Provider>
	);
};

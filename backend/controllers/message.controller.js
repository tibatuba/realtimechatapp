import Conversation from '../models/conversation.model.js';
import Message from '../models/message.model.js'; // Make sure Message model is imported

export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;  // Get message from request body
        const { id: receiverId } = req.params;  // Get receiverId from request params
        const senderId = req.user._id;  // Assumes protectRoute middleware sets req.user

        // Find or create conversation
        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] },
        });

        if (!conversation) {
            try {
                conversation = await Conversation.create({
                    participants: [senderId, receiverId],
                });
            } catch (createError) {
                console.log("Error creating conversation:", createError.message);
                return res.status(500).json({ error: "Error creating conversation" });
            }
        }

        // Create new message
        const newMessage = await Message.create({
            senderId,
            receiverId,
            message,
        });

        // Add message to conversation
        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }

        //socket functionalitt

        //await conversation.save();
        //await newMessage.save();

        await Promise.all([conversation.save(), newMessage.save()]);
        res.status(201).json(newMessage);
    } catch (error) {
        console.log("Error sending message:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const getMessages = async (req,res) =>{

    try{

        const {id:userToChatId}= req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants:{$all:[senderId, userToChatId]},

        }).populate("messages");

        if(!conversation) return res.status(200).json([]);

        const messages = conversation.messages;

        res.status(200).json(conversation.messages);

    }catch (error){
        console.log("Error in getMessages controller: ", error.message);
        res.status(500).json({error: "Internal server error"});
    }

}

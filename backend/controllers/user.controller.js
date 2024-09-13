import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;

        // Get all users except the logged-in user
        const allUsers = await User.find({ _id: { $ne: loggedInUserId } });

        // Return the users
        res.status(200).json(allUsers);  // Fixed the undefined variable issue
    } catch (error) {
        console.log("Error in getUsersForSidebar: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

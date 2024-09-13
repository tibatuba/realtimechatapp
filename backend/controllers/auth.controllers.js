import bcrypt from 'bcryptjs'; // Import bcrypt for password hashing
import User from '../models/user.model.js'; // Import User model
import generateTokenAndSetCookie from '../utils/generateToken.js';

// Signup controller
export const signup = async (req, res) => {
    try {
        const { fullName, username, password, confirmedPassword, gender } = req.body;

        // Validate if passwords match
        if (password !== confirmedPassword) {
            return res.status(400).json({ error: "Passwords don't match" });
        }

        // Validate password length
        if (password.length < 6) {
            return res.status(400).json({ error: "Password must be at least 6 characters long" });
        }

        // Check if username already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ error: "Username already exists" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Profile picture based on gender
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        // Create a new user object
        const newUser = new User({
            fullName,
            username,
            password: hashedPassword, // Save the hashed password
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        });

        // Save the new user to the database
        await newUser.save();
        await generateTokenAndSetCookie(newUser._id, res);

        // Respond with the new user data
        res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            username: newUser.username,
            profilePic: newUser.profilePic
        });

    } catch (error) {
        console.log("Error in signup controller:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Login controller
export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

        if (!user || !isPasswordCorrect) {
            return res.status(400).json({ error: "Invalid username or password" });
        }

        generateTokenAndSetCookie(user._id, res);

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic,
        });
    } catch (error) {
        console.log("Error in login controller:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Logout controller
export const logout = (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 });
        res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        console.log("Error in logout controller:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

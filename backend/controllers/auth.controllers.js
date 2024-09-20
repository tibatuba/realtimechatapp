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
    const savedUser = await newUser.save();

    if (savedUser) {
      // Generate token and set cookie after saving the user
      generateTokenAndSetCookie(savedUser._id, res);

      // Respond with the new user data
      return res.status(201).json({
        _id: savedUser._id,
        fullName: savedUser.fullName,
        username: savedUser.username,
        profilePic: savedUser.profilePic
      });
    } else {
      return res.status(400).json({ error: "Invalid user data" });
    }
  } catch (error) {
    console.error("Error in signup controller:", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Login controller
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    
    // Check if user exists
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    // Compare the provided password with the stored hashed password
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    // Generate token and set it in cookies
    generateTokenAndSetCookie(user._id, res);

    // Respond with user data
    return res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePic: user.profilePic
    });
  } catch (error) {
    console.error("Error in login controller:", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Logout controller
export const logout = (req, res) => {
  try {
    // Clear the JWT cookie by setting it to an empty string with a past expiration date
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.error("Error in logout controller:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

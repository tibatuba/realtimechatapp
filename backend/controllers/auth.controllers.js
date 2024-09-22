import bcrypt from 'bcryptjs';
import User from '../models/user.model.js';
import generateTokenAndSetCookie from '../utils/generateToken.js';

// Signup controller
export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;

    console.log("Signup Request Body:", req.body);

    if (!fullName || !username || !password || !confirmPassword || !gender) {
      return res.status(400).json({ error: "All fields are required" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords don't match" });
    }

    if (password.length < 6) {
      return res.status(400).json({ error: "Password must be at least 6 characters long" });
    }

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: "Username already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic
    });

    const savedUser = await newUser.save();

    if (savedUser) {
      generateTokenAndSetCookie(savedUser._id, res);
      return res.status(201).json({
        _id: savedUser._id,
        fullName: savedUser.fullName,
        username: savedUser.username,
        profilePic: savedUser.profilePic
      });
    } else {
      return res.status(400).json({ error: "Failed to create user" });
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

    console.log("Login Request Body:", req.body);

    if (!username || !password) {
      return res.status(400).json({ error: "Username and password are required" });
    }

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    generateTokenAndSetCookie(user._id, res);

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
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.error("Error in logout controller:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// routes/message.routes.js
import express from 'express';
import { getMessages, sendMessage } from '../controllers/message.controller.js';
import protectRoute from '../middleware/protectRoute.js';  // Make sure middleware path is correct

const router = express.Router();

// Fix typo in the route and method
router.get("/:id", protectRoute, getMessages); 
router.post("/send/:id", protectRoute, sendMessage);

export default router;

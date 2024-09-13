import express from "express";
import { login, logout, signup } from '../controllers/auth.controllers.js';

const router = express.Router();

// Middleware to log requests to the routes
router.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

export default router;

import express from 'express';
import { registerUser, loginUser, getProfile } from '../controllers/authController.js';
import { protect } from '../middlewares/authMiddleware.js';
import { registerValidation, loginValidation, validateRequest } from '../middlewares/validate.js';

const router = express.Router();

router.post('/register', registerValidation, validateRequest, registerUser);
router.post('/login', loginValidation, validateRequest, loginUser);
router.get('/profile', protect, getProfile);

export default router;

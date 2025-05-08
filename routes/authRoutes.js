import express from 'express';
import { registerUser, loginUser } from '../controllers/authController.js';
import { registerValidation, loginValidation, validateRequest } from '../middlewares/validate.js';

const router = express.Router();

router.post('/register', registerValidation, validateRequest, registerUser);
router.post('/login', loginValidation, validateRequest, loginUser);

export default router;

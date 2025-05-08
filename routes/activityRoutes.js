import express from 'express';
import { createActivity, getAllActivities, getActivityById } from '../controllers/activityController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', protect, createActivity); // Authenticated users can create
router.get('/', getAllActivities);         // Public listing
router.get('/:id', getActivityById);       // Single activity

export default router;

import express from 'express';
import { createActivity, getAllActivities, getActivityById } from '../controllers/activityController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', protect, createActivity);
router.get('/', getAllActivities);
router.get('/:id', getActivityById);

export default router;

import express from 'express';
import { bookActivity, getUserBookings, cancelBooking } from '../controllers/bookingController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/:activityId', protect, bookActivity);
router.get('/my', protect, getUserBookings);
router.delete('/:bookingId', protect, cancelBooking);

export default router;

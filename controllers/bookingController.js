import Booking from '../models/Booking.js';
import Activity from '../models/Activity.js';

export const bookActivity = async (req, res) => {
    const activityId = req.params.activityId;
    const userId = req.user.id;

    try {
        const activity = await Activity.findById(activityId);
        if (!activity) return res.status(404).json({ message: 'Activity not found' });

        const existingBooking = await Booking.findOne({ user: userId, activity: activityId });
        if (existingBooking) return res.status(400).json({ message: 'Already booked' });

        const booking = await Booking.create({
            user: userId,
            activity: activityId,
        });

        res.status(201).json(booking);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

export const getUserBookings = async (req, res) => {
    try {
        const bookings = await Booking.find({ user: req.user.id }).populate('activity');
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

export const cancelBooking = async (req, res) => {
    const bookingId = req.params.bookingId;

    try {
        const booking = await Booking.findById(bookingId);
        if (!booking) return res.status(404).json({ message: 'Booking not found' });
        if (booking.user.toString() !== req.user.id) return res.status(403).json({ message: 'Unauthorized' });

        await booking.deleteOne();
        res.json({ message: 'Booking cancelled' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

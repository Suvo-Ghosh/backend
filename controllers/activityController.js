import Activity from '../models/Activity.js';

export const createActivity = async (req, res) => {
    const { title, description, date, location } = req.body;
    try {
        const activity = await Activity.create({
            title,
            description,
            date,
            location,
            createdBy: req.user.id,
        });
        res.status(201).json(activity);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

export const getAllActivities = async (req, res) => {
    try {
        const activities = await Activity.find().sort({ date: 1 });
        res.json(activities);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

export const getActivityById = async (req, res) => {
    try {
        const activity = await Activity.findById(req.params.id);
        if (!activity) return res.status(404).json({ message: 'Activity not found' });
        res.json(activity);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

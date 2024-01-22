import express from 'express';
import issueTrackerPath from './issueTracker.js';

const router = express.Router();

router.get('/', (req, res) => { res.redirect('/issueTracker'); });

router.use('/issueTracker', issueTrackerPath);

export default router;

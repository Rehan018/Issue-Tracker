import express from 'express';
import {
  issueTrackerPage,
  createProject,
  addProjectToMongoDB,
  projectDetails,
  filterProjectDetails,
  createAnIssue,
  addAnIssue
} from '../controller/issueController.js';

const router = express.Router();

router.get('/', issueTrackerPage);
router.get('/createProject', createProject);
router.post('/addProject', addProjectToMongoDB);
router.get('/projectDetails', projectDetails);
router.post('/filterProjectDetails', filterProjectDetails);
router.get('/createAnIssue/:id', createAnIssue);
router.post('/createAnIssue/:id/addIssue', addAnIssue);

export default router;

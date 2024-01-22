import { ObjectId } from 'mongodb';
import mongoDB from '../database/config/mongodb.js';

const filterBy = (filter, projectDetails) => {
    switch (filter) {
        case 'Title':
        case 'Description':
        case 'Author':
            for (let check = 0; check < projectDetails.length; ++check) {
                for (let index = 0; index < projectDetails.length - 1; ++index) {
                    let temp = null;
                    if (projectDetails[index][filter.toLowerCase()] > projectDetails[index + 1][filter.toLowerCase()]) {
                        temp = projectDetails[index];
                        projectDetails[index] = projectDetails[index + 1];
                        projectDetails[index + 1] = temp;
                    }
                }
            }
            return projectDetails;

        default:
            break;
    }
};

export const issueTrackerPage = async (req, res) => {
    const collection = await mongoDB();
    const addedProject = await collection.find({ id: 'addedProject' }).toArray();
    return res.render('issueTracker', {
        title: "Issue Tracker",
        addedProject
    });
};

export const createProject = (req, res) => {
    return res.render('createProject', {
        title: "Create Project"
    });
};

export const addProjectToMongoDB = async (req, res) => {
    let formData = req.body;
    formData = { ...formData, id: "addedProject" };
    const collection = await mongoDB();
    collection.insertOne(formData, (err, data) => {
        if (err)
            throw err;
        else if (data)
            console.log('data inserted');
    });
    res.redirect('/issueTracker');
};

export const projectDetails = async (req, res) => {
    const collection = await mongoDB();
    let projectDetails = await collection.find({ id: 'addedProject' }).toArray();
    return res.render('projectDetails', {
        title: "Project Details",
        projectDetails
    });
};

export const filterProjectDetails = async (req, res) => {
    const collection = await mongoDB();
    let projectDetails = await collection.find({ id: 'addedProject' }).toArray();
    const filterReq = req.body;

    if (filterReq.flexRadio === 'Project Title') {
        const filteredProjectDetails = filterBy('Title', projectDetails);
        return res.render('projectDetails', { title: "Project Details", projectDetails: filteredProjectDetails });
    } else if (filterReq.flexRadio === 'Project Description') {
        const filteredProjectDetails = filterBy('Description', projectDetails);
        return res.render('projectDetails', { title: "Project Details", projectDetails: filteredProjectDetails });
    } else if (filterReq.flexRadio === 'Project Author') {
        const filteredProjectDetails = filterBy('Author', projectDetails);
        return res.render('projectDetails', { title: "Project Details", projectDetails: filteredProjectDetails });
    }
};

export const createAnIssue = async (req, res) => {
    const issueId = req.params;
    return res.render('createIssue', { title: "Create Issue", issueId });
};

export const addAnIssue = async (req, res) => {
    console.log(req.params);
    console.log(req.body);
    const issue = req.body;
    const bugId = req.params.id;
    const collection = await mongoDB();
    await collection.findOneAndUpdate({ _id: ObjectId(bugId) }, { '$push': { bugs: issue } });
    res.redirect('/issueTracker/projectDetails');
};

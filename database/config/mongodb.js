import { MongoClient } from 'mongodb';

const url = 'mongodb://localhost:27017/';

async function getEmpData() {
    const client = await MongoClient.connect(url);
    const connection = client.db('issueTracker'); // Establish connection
    return connection.collection('IssueTracker2023'); // creating a collection and naming it also
}

export default getEmpData;

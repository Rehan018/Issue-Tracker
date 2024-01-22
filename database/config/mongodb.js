import { MongoClient } from 'mongodb';

const url = 'mongodb://localhost:27017/';

async function getEmpData() {
    const client = await MongoClient.connect(url);
    const connection = client.db('issueTracker'); 
    return connection.collection('IssueTracker'); 
}

export default getEmpData;

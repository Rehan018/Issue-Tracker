import { MongoClient } from 'mongodb';

const url = 'mongodb+srv://test:test@cluster0.cbdyt.mongodb.net/?retryWrites=true&w=majority&appName=issueTracker';

async function getEmpData() {
    const client = await MongoClient.connect(url);
    const connection = client.db(); 
    return connection.collection('IssueTracker'); 
}

export default getEmpData;

const { MongoClient } = require("mongodb");
const { readFileSync } = require("fs");
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
const port = 5001;

// mognodb atlas connection string
const uri = "mongodb+srv://mbattal:9bQ4Sb48v6xehG3C@cluster0.efjoi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

app.get('/newsletters', async (req, res) => {
    try {
        const myDB = client.db('cgsa_db');
        const myColl = myDB.collection('newsletters');
        
        const query = {}; // Fetch all documents
        const options = {
            projection: { _id: 0, first_name: 1, last_name: 1, email: 1 },
        };
        const data = await myColl.find(query, options).toArray(); // Fetch and convert to array
        
        res.json(data); // Send the data to the client
    } catch (err) {
        console.error('Error fetching newsletters:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/newsletter', (req, res) => {
    const { first_name, last_name, email } = req.body;
    const doc = { first_name, last_name, email };

    const myDB = client.db('cgsa_db');
    const myColl = myDB.collection('newsletters');
    
    const result = myColl.insertOne(doc);

    res.json(doc);
});

app.get('/volunteers', async (req, res) => {
    try {
        const myDB = client.db('cgsa_db');
        const myColl = myDB.collection('volunteers');
        
        const query = {}; // Fetch all documents
        const options = {
            projection: { _id: 0, first_name: 1, last_name: 1, email: 1, pronouns: 1, graduation_year: 1, phone: 1, help_events: 1, help_library: 1, safe_space: 1, questions: 1 },
        };
        const data = await myColl.find(query, options).toArray(); // Fetch and convert to array
        
        res.json(data); // Send the data to the client
    } catch (err) {
        console.error('Error fetching volunteers:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/volunteers', (req, res) => {
    const { first_name, last_name, email, pronouns, graduation_year, phone, help_events, help_library, safe_space, questions } = req.body;
    const doc = { first_name, last_name, email, pronouns, graduation_year, phone, help_events, help_library, safe_space, questions };

    const myDB = client.db('cgsa_db');
    const myColl = myDB.collection('volunteers');
    
    const result = myColl.insertOne(doc);

    res.json(doc);
});

app.get('/bookings', async (req, res) => {
    try {
        const myDB = client.db('cgsa_db');
        const myColl = myDB.collection('bookings');
        
        const query = {}; // Fetch all documents
        const options = {
            projection: { _id: 0, first_name: 1, last_name: 1, email: 1, clubOrganization: 1, primaryContactName: 1, primaryContactEmail: 1, purpose: 1, bookingTime: 1, recurringDays: 1, spaceNeeded: 1, closeSpace:1 },
        };
        const data = await myColl.find(query, options).toArray(); // Fetch and convert to array
        
        res.json(data); // Send the data to the client
    } catch (err) {
        console.error('Error fetching bookings:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/bookings', (req, res) => {
    const { first_name, last_name, email, clubOrganization, primaryContactName, primaryContactEmail, purpose, bookingTime, recurringDays, spaceNeeded, closeSpace } = req.body;
    const doc = { first_name, last_name, email, clubOrganization, primaryContactName, primaryContactEmail, purpose, bookingTime, recurringDays, spaceNeeded, closeSpace  };

    const myDB = client.db('cgsa_db');
    const myColl = myDB.collection('bookings');
    
    const result = myColl.insertOne(doc);

    res.json(doc);
});

app.get('/text', (req, res) => {
    try {
        const data = readFileSync('./pages.json')
        res.status(200).json(JSON.parse(data))
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Error' })
    }
});

app.get('/calendar', async (req, res) => {
    try {
        const data = await fetch('https://www.googleapis.com/calendar/v3/calendars/c_5f8a26005bea5c82bec0a44e4bc45d2524bfae7d556666a5ef3741eb150c5b38@group.calendar.google.com/events?key='+process.env.CALENDAR_API_KEY);
        if (!data.ok) {
            throw new Error('Oops, something went wrong!')
        }
        res.status(200).json(await data.json())
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Error' })
    }
})

app.listen(5001, () => {
    console.log('Server listening on port 5001');
});
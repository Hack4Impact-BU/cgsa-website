const { MongoClient } = require("mongodb");
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
const port = 5001;

// mognodb atlas connection string
const uri = "mongodb+srv://mbattal:9bQ4Sb48v6xehG3C@cluster0.efjoi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

app.post('/newsletter', (req, res) => {
    const { first_name, last_name, email } = req.body;
    const doc = { first_name, last_name, email };

    const myDB = client.db('cgsa_db');
    const myColl = myDB.collection('newsletters');
    
    const result = myColl.insertOne(doc);

    res.json(doc);
});

app.listen(5001, () => {
    console.log('Server listening on port 5001');
  });
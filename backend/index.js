import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import { MongoClient } from 'mongodb'
import { readFileSync } from 'fs'

dotenv.config()

const app = express()
app.use(cors())
app.use(bodyParser.json())

const PORT = process.env.port || 4000;

const mongourl = process.env.MONGO_URL
const mongoclient = new MongoClient(mongourl, {})

mongoclient.connect().then(() => {
    console.log("Connected to MongoDB")
})

app.post('/newsletter', async (req, res) => {
    try {
        const doc = req.body
        if (!doc.first_name || !doc.last_name || !doc.email || Object.keys(log).length !== 3) {
            res.status(400).json({ message: 'Bad Request' })
            return
        }
        await mongoclient.db('cgsa_db').collection('newsletters').insertOne(doc)
        res.status(201).json({ message: 'Success' })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Error' })
    }
})

app.post('/volunteers', async (req, res) => {
    try {
        const doc = req.body
        if (!doc.first_name || !doc.last_name || !doc.email || !doc.pronouns || !doc.graduation_year || !doc.phone || !doc.help_events || !doc.help_library || !doc.safe_space || !doc.questions || Object.keys(log).length !== 10) {
            res.status(400).json({ message: 'Bad Request' })
            return
        }
        await mongoclient.db('cgsa_db').collection('volunteers').insertOne(doc)
        res.status(201).json({ message: 'Success' })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Error' })
    }
})

app.post('/bookings', async (req, res) => {
    try {
        const doc = req.body
        if (!doc.first_name || !doc.last_name || !doc.email || !doc.primaryContactName || !doc.primaryContactEmail || !doc.purpose || !doc.bookingTime || !doc.spaceNeeded || !doc.closeSpace || Object.keys(log).length < 9 || Object.keys(log).length > 11) {
            res.status(400).json({ message: 'Bad Request' })
            return
        }
        await mongoclient.db('cgsa_db').collection('bookings').insertOne(doc)
        res.status(201).json({ message: 'Success' })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Error' })
    }
})

app.get('/text', (req, res) => {
    try {
        const data = readFileSync('./pages.json')
        res.status(200).json(JSON.parse(data))
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Error' })
    }
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})
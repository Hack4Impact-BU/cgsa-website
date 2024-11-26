import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import { readFileSync } from 'fs'
import { MongoClient } from 'mongodb'
import mailchimp from '@mailchimp/mailchimp_marketing'
import createHtmlTemplate from './emailTemplate.js'

dotenv.config()

const app = express()
app.use(cors())
app.use(bodyParser.json({ limit: '10mb' }))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))

const PORT = process.env.PORT || 5001

const mongourl = process.env.MONGO_URL
const mongoclient = new MongoClient(mongourl, {})

mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_SERVER_PREFIX,
})

app.get('/newsletters', async (req, res) => {
    try {
        const newsletters = await mongoclient.db('cgsa_db').collection('newsletters').find({}).toArray()
        res.status(200).json(newsletters)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Oops, something went wrong!' })
    }
})

app.post('/newsletter', async (req, res) => {
    try {
        const newsletter = req.body
        if (!newsletter.firstName || !newsletter.lastName || !newsletter.email || Object.keys(newsletter).length !== 3) {
            res.status(400).json({ message: 'Oops, something went wrong!' })
            return
        }
        await mongoclient.db('cgsa_db').collection('newsletters').insertOne(newsletter)
        res.status(201).json({ message: 'You have signed up for the newsletter!' })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Oops, something went wrong!' })
    }
})

app.get('/blogs', async (req, res) => {
    try {
        const blogs = await mongoclient.db('cgsa_db').collection('blogs').find({}).toArray()
        res.status(200).json(blogs)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Oops, something went wrong!' })
    }
})

app.post('/blog', async (req, res) => {
    const { title, author, content } = req.body
    if (!title || !author || !content) {
        return res.status(400).json({ message: 'Title, author, and content are required.' })
    }
    try {
        const blogPost = { title, author, content, createdAt: new Date() }
        await mongoclient.db('cgsa_db').collection('blogs').insertOne(blogPost)
        res.status(201).json({ message: 'Blog post created successfully!' })
    } catch (error) {
        console.error('Error creating blog post:', error)
        res.status(500).json({ message: 'Failed to create blog post.' })
    }
})

app.post('/send-newsletter', async (req, res) => {
    const { subject, content, author } = req.body
    if (!subject || !content || !author) {
        return res.status(400).json({ message: 'Subject, content, and author are required.' })
    }
    try {
        const subscribers = await mongoclient.db('cgsa_db').collection('newsletters').find({}).toArray()
        const emails = subscribers.map(sub => sub.email)
        const campaign = await mailchimp.campaigns.create({
            type: 'regular',
            recipients: {
                list_id: process.env.MAILCHIMP_LIST_ID,
            },
            settings: {
                subject_line: subject,
                title: 'BU CGSA',
                from_name: 'BU CGSA',
                reply_to: 'cgsa@bu.edu',
            },
        })
        const htmlContent = createHtmlTemplate(subject, author, content)
        await mailchimp.campaigns.setContent(campaign.id, { html: htmlContent })
        await mailchimp.campaigns.send(campaign.id)
        res.status(200).json({ message: 'Newsletter sent successfully!', recipients: emails })
    } catch (error) {
        console.error('Error sending newsletter:', error.response?.body || error.message)
        res.status(500).json({
            message: 'Failed to send newsletter.',
            error: error.response?.body || error.message,
        })
    }
})

app.get('/volunteers', async (req, res) => {
    try {
        const volunteers = await mongoclient.db('cgsa_db').collection('volunteers').find({}).toArray()
        res.status(200).json(volunteers)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Oops, something went wrong!' })
    }
})

app.post('/volunteer', async (req, res) => {
    try {
        const volunteer = req.body
        if (!volunteer.firstName || !volunteer.lastName || !volunteer.email || !volunteer.pronouns || !volunteer.graduationYear || !volunteer.phone || !volunteer.helpEvents || !volunteer.helpLibrary || !volunteer.safeSpace || !volunteer.questions || Object.keys(volunteer).length !== 10) {
            res.status(400).json({ message: 'Oops, something went wrong!' })
            return
        }
        await mongoclient.db('cgsa_db').collection('volunteers').insertOne(volunteer)
        res.status(201).json({ message: 'Thank you for signing up to volunteer! We will be in contact with you soon.' })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Oops, something went wrong!' })
    }
})

app.get('/bookings', async (req, res) => {
    try {
        const bookings = await mongoclient.db('cgsa_db').collection('bookings').find({}).toArray()
        res.status(200).json(bookings)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Oops, something went wrong!' })
    }
})

app.post('/booking', async (req, res) => {
    try {
        const booking = req.body
        if (!booking.firstName || !booking.lastName || !booking.email || !booking.primaryContactName || !booking.primaryContactEmail || !booking.purpose || !booking.bookingTime || !booking.spaceNeeded || !booking.closeSpace || Object.keys(booking).length < 9 || Object.keys(booking).length > 11) {
            res.status(400).json({ message: 'Oops, something went wrong!' })
            return
        }
        await mongoclient.db('cgsa_db').collection('bookings').insertOne(booking)
        res.status(201).json({ message: 'We have received your booking! We will be in contact with you soon.' })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Oops, something went wrong!' })
    }
})

app.get('/text', (req, res) => {
    try {
        const data = readFileSync('./pages.json')
        res.status(200).json(JSON.parse(data))
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Oops, something went wrong!' })
    }
})

app.get('/calendar', async (req, res) => {
    try {
        const data = await fetch('https://www.googleapis.com/calendar/v3/calendars/c_5f8a26005bea5c82bec0a44e4bc45d2524bfae7d556666a5ef3741eb150c5b38@group.calendar.google.com/events?key=' + process.env.CALENDAR_API_KEY)
        if (!data.ok) {
            throw new Error('Oops, something went wrong!')
        }
        res.status(200).json(await data.json())
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Oops, something went wrong!' })
    }
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})
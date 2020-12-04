import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectDB from './db.js';
import postRoutes from './routes/postsRoute.js'
import dotenv from 'dotenv'

dotenv.config()



connectDB()
const app=express()


app.use(bodyParser.json({limit:"30mb", extended: true}))
app.use(bodyParser.urlencoded({limit:"30mb", extended: true}))

app.use(cors())

app.use('/posts', postRoutes);
const PORT = process.env.PORT || 5000;

app.listen(PORT,console.log(`SERVER RUNNING ON PORT: ${PORT}`))

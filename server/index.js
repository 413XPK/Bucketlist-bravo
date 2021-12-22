import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js'
import userRoutes from './routes/users.js'


const app = express();
dotenv.config();

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true});


app.use(bodyParser.json({limit: "30mb", extended: true})); //limit means sending images 
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());
app.use('/posts', postRoutes); //identify routes after cors

app.use('/user', userRoutes)

app.use(cors({origin: process.env.CORS_ORIGIN}))



// mongoose.set('useFindAndModify', false);

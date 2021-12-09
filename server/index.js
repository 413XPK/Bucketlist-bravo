import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js'
import userRoutes from './routes/users.js'


const app = express();
dotenv.config();


app.use(bodyParser.json({limit: "30mb", extended: true})); //limit means sending images 
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());
app.use('/posts', postRoutes); //identify routes after cors

app.use('/user', userRoutes)


const CONNECTION_URL = 'mongodb+srv://<username>:<password>@cluster0.itsc5.mongodb.net/travelApp?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true}) 
    .then(() => app.listen(PORT, () => console.log(`listening on port ${PORT}`)))
    .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false);

import express from 'express';
import mongoose from 'mongoose';
import router from './router.js';
import cors from 'cors'
import morgan from 'morgan'


const app = express()

app.use(morgan('dev'))
app.use(cors())

const PORT = process.env.PORT || 5000

const DB_URL = "mongodb+srv://instagram1:instagram1@cluster0.dew7w.mongodb.net/instagram1?retryWrites=true&w=majority";

app.use(express.json())
app.use('/', router)


async function startApp() {
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology:true, useNewUrlParser:true, useFindAndModify: false})
        app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT))
    } catch (e) {
        console.log(e);
    }
}
startApp()




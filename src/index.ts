import express from 'express'
import diaryRouter from './routes/diaries'
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();
app.use(express.json());

app.use(cors({ origin: process.env.CORS_DOMAIN_ORIGIN }));
app.use('/api/diaries', diaryRouter);

app.get('/ping', (_req, res) => {
    console.log('ping here');
    res.send('pong');
})

app.all('/', (_req, res) => {
    const key = process.env.KEY;
    console.log("Just got a request!")
    res.send(key)
})

app.listen(process.env.PORT || 3000)


import express from 'express'
import diaryRouter from './routes/diaries'
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(express.json());

app.use('/api/diaries', diaryRouter);

app.get('/api/ping', (_req, res) => {
    console.log('ping here');
    res.send('pong');
})

app.all('/', (_req, res) => {
    const key = process.env.KEY;
    console.log("Just got a request!")
    res.send(key)
})

app.listen(process.env.PORT || 3000)


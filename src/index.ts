import express from 'express'
import diaryRouter from './routes/diaries'
import dotenv from 'dotenv';
import LocalStorage from 'node-localstorage';

dotenv.config();
const app = express();
app.use(express.json());

app.use('/api/diaries', diaryRouter);

app.get('/api/ping', (_req, res) => {
    console.log('ping here');
    res.send('pong');
})

app.get('/store/:key/:value', (req, res) => {
    const { key, value } = req.params;
    const localStorage = new LocalStorage.LocalStorage('/tmp/scratch');
  
    localStorage.setItem(key, value);
  
    res.send(`Value '${value}' stored with key '${key}' in localStorage.`);
  });
  
  // Set up a route to retrieve data
  app.get('/retrieve/:key', (req, res) => {
    const { key } = req.params;
    const localStorage = new LocalStorage.LocalStorage('/tmp/scratch');
    const value = localStorage.getItem(key);
  
    if (value) {
      res.send(`Value for key '${key}': ${value}`);
    } else {
      res.send(`No value found for key '${key}'`);
    }
  });
  

app.all('/', (_req, res) => {
    const key = process.env.KEY;
    console.log("Just got a request!")
    res.send(key)
})

app.listen(process.env.PORT || 3000)


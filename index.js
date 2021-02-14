import express from 'express';
import tweetsRouter from './routes/tweets.js';

const app = express();
app.use(express.json());

app.use('/tweets', tweetsRouter);

const port = 5004;
app.listen(port, ()=>console.log(`server is up at port ${port}`));
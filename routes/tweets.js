import express from 'express';
import { searchTweets, postTweets, getTweetById } from './twitHelpers.js';

const tweetsRouter = express.Router();

tweetsRouter.get('/search', (req,res)=>{
    const searchObject = req.query;
    searchTweets(searchObject).then((data)=>{
        res.json({ success: true, response: data});
    }).catch((err)=>{
        res.json({success: false, error: err})
    })
});

tweetsRouter.post('/post', (req,res)=>{
    const { tweetText } = req.body;
    postTweets(tweetText).then((data)=>{
        res.json({ success: true, response: data});
    }).catch((err)=>{
        res.json({success: false, error: err})
    })
});

tweetsRouter.get('/getById', (req,res)=>{
    const { id } = req.query;
    getTweetById(id).then((data)=>{
        res.json({ success: true, response: data});
    }).catch((err)=>{
        res.json({success: false, error: err})
    })
});

export default tweetsRouter;
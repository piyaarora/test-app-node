import Twit from 'twit';
import config from '../config.js';

const T = new Twit(config);

export const searchTweets = (searchObject) => new Promise((resolve, reject) => {
    T.get('search/tweets', { q: `#${searchObject.queryText}`, count: searchObject.queryCount }, function(err, data) {
        if(data.errors){
            reject( data.errors );
        }
        if(err || !data){
            return reject('Oops! Something went wrong. Please retry..');
        }

        const tweets = data.statuses;
        if(tweets.length === 0){
            reject('No tweet matches your search string. Try something else..');
        }

        let texts = [];
        for(let i = 0; i < tweets.length; i++){
            texts.push(tweets[i].text);
        }
        resolve( texts );
    })
})

export const postTweets = (tweetText) => new Promise((resolve, reject) => {
    T.post('statuses/update', { status: tweetText }, function(err, data) {
        if(data.errors){
            reject( data.errors );
        }
        if(err || !data){
            return reject('Oops! Something went wrong. Please retry..');
        }
        resolve( { id: data.id_str, tweet: data.text } );
    })
})

export const getTweetById = (id) => new Promise((resolve, reject) => {
    T.get('statuses/show', { id: id }, function(err, data) {
        if( data.errors ){
            reject( data.errors );
        }
        if(err || !data){
            return reject('Oops! Something went wrong. Please retry..');
        }
        resolve({ id: data.id_str, tweet: data.text });
    })
})

import React, {useState} from 'react'

import './App.css';
import axios from 'axios';

const App = () =>{
  const [tweet,setTweet] = useState({
    tweetText:'',
  
  })
  const handleChange =(e)=>{
    setTweet({
      ...tweet,
      [e.target.name] : e.target.value
    })
  
  }

  const handleSubmit = () =>{
    axios.get('http://localhost:3000/tweets/post', tweet)
    .then((res) => {
      console.log('tweet added', res);
      setTweet({   
       tweetText:''
      })
    })
    .catch((err) => {
      console.log('err', err);
    })
  }

  return(
    <div className="App">
        <div className="cont">
          <div className="form sign-in">
            <h2>Welcome back,</h2>
            <label>
              <span>Type hashtag</span>
              <input type="text" name="tweetText" value={tweet.tweetText} onChange={handleChange} />
            </label>
            <button type="button" className="submit" onSubmit={handleSubmit}>Search</button>
          </div>
        </div>

     </div>
  
  )
}


export default App;
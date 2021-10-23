import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios'


function App() {
  const [getData, setData] = useState({})

  // useEffect(()=>{
  //   axios.get("/members").then(
  //     response => response
  //     ).then(
  //       data => {
  //         setData(data)
  //         console.log(data)
  //       }
  //     )
  // }, [])
  useEffect(()=> {
    axios({
      method: 'post',
      url: '/url',
      data: {
        url: 'https://s3-us-west-2.amazonaws.com/blog.assemblyai.com/audio/8-7-2018-post/7510.mp3'
      }
    })
  }, [])
  // useEffect(()=> {
  //   axios.post('/url', {
  //     url: 'https://s3-us-west-2.amazonaws.com/blog.assemblyai.com/audio/8-7-2018-post/7510.mp3'
  //   })
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });

  // }, [])

  useEffect(()=>{
    axios.get('/url').then(response => {
      console.log("SUCCESS", response)
      setData(response.data)
    }).catch(error => {
      console.log(error)
    })

  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React + Flask Tutorial</p>
      </header>
    {(typeof getData.members=='undefined') ? (<p>Loading</p>) : (getData.members.map((member,i) => (<p key={i}>{member}</p>)))}
    </div>
  );
}

export default App;
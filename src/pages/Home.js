import React from 'react';
import { useState, useEffect } from 'react';
import firebase from '../service/firebase';

//import { auth } from '../service/firebase'
import '../styles/Home.css'
//import Banner from '../components/Banner';

import '../App.css';

function Home () {
//const Home = () => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user);
    })
  }, [])

  console.log(user);
  return (
    <p></p>
  )
}

export default Home;
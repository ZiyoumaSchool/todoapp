import React from 'react';

import { auth } from '../service/firebase'
import '../styles/Home.css'

import '../App.css';

const Home = ({ user }) => {
  return (
    <div align="center">
      <h1>Hello, <span></span>{user.displayName}</h1>
      <img src={user.photoURL} alt="" />
      <button className="button signout" onClick={() => auth.signOut()}>Sign out</button>
    </div>
  )
}

export default Home;
import { Provider } from 'react-redux';
import { useState, useEffect } from 'react';

import store from './lib/redux';

import InboxScreen from './components/InboxScreen';
import Banner from './components/Banner';
import Login from './components/Login';
import Home from './components/Home';
import './index.css';
import firebase from './service/firebase';


function App(){
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user);
    })
  }, [])

  console.log(user);

  return (
  <div className="app">
    <Banner/>
    {user ? 
    <div>
    <Home user={user} /> 
    <Provider store={store}>
    <InboxScreen />      
    </Provider>
    </div>
    : <Login/>
    }
    
  </div>
  );
}

export default App;
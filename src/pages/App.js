import { Provider } from 'react-redux';
import { useState, useEffect } from 'react';

import store from '../lib/redux';

import InboxScreen from '../components/InboxScreen';
import Banner from '../components/Banner';
import Login from './Login';
import Home from './Home';
//import './index00';
import firebase from '../service/firebase';


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
    
    {user ? 
    <div>
    <Banner user={user}/>
    <Home/> 
    <Provider store={store}>
    <InboxScreen />      
    </Provider>
    </div>
      
    : <div>
          <Login/>
      </div>
    }
    
  </div>
  );
}

export default App;
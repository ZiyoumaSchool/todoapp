import { Provider } from 'react-redux';
import { useState, useEffect } from 'react';

import store from '../lib/redux';

import InboxScreen from '../components/InboxScreen';
import Banner from '../components/Banner';
import Login from './Login';
//import Home from './Home';
import '../index.css';
import firebase from '../service/firebase';

function TaskPage (){
    const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user);
    })
  }, [])

    return (
        <div>
        {user ? 
    <div>
    <Banner user={user}/>
    <p>LISTE DES TACHES</p>
    <Provider store={store}>
    <InboxScreen />      
    </Provider>
    </div>
      
    : <div>
          <Login/>
      </div>
    }
        </div>
    )
}

export default TaskPage
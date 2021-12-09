// A simple redux store/actions /reduce Implementtaion.
// A true app would be more complex and separated into different files.

import { createStore } from "redux";
import { useState } from 'react';
import firebase from '../config/firbaseConfig';
import db from "../config/firebaseDb";
//import{ getFirebase } from "react-redux-firbase"
/*import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
*/





//////////////////////////////////////////// RETRIEVING DATA FROM FIRESTORE ///////////////////////

/*const Read = () => {
  
 const [info , setInfo] = useState([]);
  
    // Start the fetch operation as soon as
    // the page loads
    window.addEventListener('load', () => {
        Fetchdata();
      });
  
    // Fetch the required data using the get() method
    const Fetchdata = ()=>{
        db.collection("tasks").get().then((querySnapshot) => {
             
            // Loop through the data and store
            // it in array to display
            querySnapshot.forEach(element => {
                var data = element.data();
                setInfo(arr => [...arr , data]);
                  
            });
            
        })
    }

    
 }
 */


//////////////////////////////////////////// END RETRIEVING DATA FROM FIRESTORE ///////////////////



// The actions are the "names" of the changes that can happen to the store

export const actions = {
    ARCHIVE_TASK: 'ARCHIVE_TASK',
    PIN_TASk: 'PIN_TASK',
};

// The action creators bundle actions with the data required to execute them

export const archiveTask = id=> ({ type: actions.ARCHIVE_TASK, id }) ;

export const pinTask = id=> ({type: actions.PIN_TASk, id });

// All our reducers simply change the state of a single task

function taskStateReducer(taskState) {
    return (state, action) => {
        return {
            ...state,
            tasks: state.tasks.map(task =>
                task.id === action.id? { ...task, state: taskState } : task
                ),
        };
    };
}

// The reducer describes how the contents of the store change for each action

export const reducer = (state, action) => {
    switch (action.type) {
        case actions.ARCHIVE_TASK:
            return taskStateReducer('TASK_ARCHIVED') (state, action);
        case actions.PIN_TASk:
            return taskStateReducer('TASK_PINNED')(state, action);
        default : 
        return state;
    }
};

// The initial state of our store when the app loads.
// Usually, you will fetch this from a server 



const defaultTasks = [
    { id: '1', title: 'Something', state: 'TASK_INBOX' },
    { id: '2', title: 'Something more', state: 'TASK_INBOX' },
    { id: '3', title: 'Something else', state: 'TASK_INBOX' },
    { id: '4', title: 'Something again', state: 'TASK_INBOX' },
];

// We export the constructed redux store

 //export const defaultTasks1 = () =>{
    let list=[]
     db.collection("tasks").get().then((querySnapshot) => {        
          // Loop through the data and store
          // it in array to display
          querySnapshot.forEach(element => {
              var data = element.data();
           //   console.log("data ",data)
              list.push({id : data.id, title: data.title, state: data.state})              
             // setInfo(arr => [...arr , data]);
                
          });
         // console.log("result bd=====>",list)
          
      })
      console.log("default 000 =>",list)
    //return list
    const defaultTasks1 = list
//}

console.log("default 1====>",defaultTasks1)


console.log(  db.collection("tasks").get().then((querySnapshot) => {
  let list=[]
    // Loop through the data and store
    // it in array to display
    querySnapshot.forEach(element => {
        var data = element.data();
        //console.log("data ",data)
        //list.push(data)
        list.push({id : data.id, title: data.title, state: data.state})
        const defaultTasks1 = list
        
       // setInfo(arr => [...arr , data]);
          
    });
    console.log("result bd-default1>",defaultTasks1)
    
})
)



export default createStore(reducer, { tasks:defaultTasks1});



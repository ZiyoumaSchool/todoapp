import db from '../../config/firebaseDb';
import { Provider } from 'react-redux';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import store from '../../lib/redux'

import InboxScreen from './InboxScreen';
import Banner from '../Banner';
import Login from '../../pages/Login';
import Home from '../../pages/Home';
import '../../styles/AddTask.css';
//import './index00';
import firebase from '../../service/firebase'

const AddTask = () => {
	const [title , Settitle] = useState("");
	const [level , Setlevel] = useState("");
	const [state , Setstate] = useState("TASK_INBOX");
	var size = 0;
	const sub = (e) => {
		e.preventDefault();


		 
		// Add a new task to the database
        

		db.collection('tasks').get().then(snap => {
			size = snap.size // will return the collection size

			db.collection("tasks").add({
				id:size+1,
				title: title,
				level: level,
				state : "TASK_INBOX",
				
			})
			.then((docRef) => {
				alert("Data Successfully Submitted");
			})
			.catch((error) => {
				console.error("Error adding document: ", error);
			});
			
		 });

		
	}

	    // END Add a new task to the database

	// Check if the user is connected

    const [user, setUser] = useState(null);

    useEffect(() => {
      firebase.auth().onAuthStateChanged(user => {
        setUser(user);
      })
    }, [])

	// END Check if the user is connected

	return (
        <>
        <div>
        {user ? 
    <div>
    <Banner user={user}/>
	
       <div className="container">
          <div className="row">
            <div className="col-xl-12">
			<center>
			
				<form style={{marginTop:"2px" }}
				onSubmit={(event) => {sub(event)}}>
					<div className="add-task-2">Add TASK</div>
					<div className="add-task-1"><input type="text" size="300px" placeholder="Title"
					onChange={(e)=>{Settitle(e.target.value)}} className="form-control border border-primary rounded" />
					</div>
					&nbsp;&nbsp;
					<div className="add-task-2">
					<input type="number" placeholder="Level" max='5' min="0"
					onChange={(e)=>{Setlevel(e.target.value)}} className="form-control-lg border border-primary rounded"/>
					</div>
					&nbsp;&nbsp;
					{/*<input type="text" placeholder="state Enrolled" className="form-control border border-primary rounded" 
					onChange={(e)=>{Setstate(e.target.value)}}/>
		<br/><br/>*/}
					<div className="add-task-3">
					<button type="submit" className="btn btn-primary">
						Add					
					</button>
					</div>
					<br/><br/>

			</form>

			</center>
		</div>
	</div>
  </div>


    {/*<Provider store={store}>*/}
    <InboxScreen />      
     {/*</Provider>*/}
    </div>
      
    : <div>
          <Login/>
      </div>
    }
        </div>
		
        </>
	);
}

export default AddTask;

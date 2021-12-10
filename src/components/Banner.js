import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Banner.css';
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../assets/logo.png';
import { auth } from '../service/firebase';
//import Recommandation from './Recommandation'
//const Home = ({ user }) => {
const Banner =  ({ user }) => {
    const title = "Todo|app"
   
    return(

        /*<div className='lmj-banner'>{children}</div>*/

        <div className="banner-bootom-line">
       <Link to="/">
        <div className="lmj-banner">        
            <img src={logo} alt="ToDo-App" className='lmj-logo'/>
        
            <h2 className='lmj-title'>
                {title}
            </h2>  
                  
        </div>
        </Link>
        
        <div className="lmj-user">
                              
                {user.displayName !== ""}  {
                <div align="right">
                <img className="rounded-circle z-depth-2" alt="100x100" src={user.photoURL} alt="" height="50px" width="50px" /><p></p>                
                <span className="text-primary"><h4> <span></span>{user.displayName}</h4></span><br/>
                <button className="btn btn-outline-dark" onClick={() => auth.signOut()}>Sign out</button>
                </div>
                } 
                
        </div>
        <nav className="nav-banner">
                    {/*
                    <Link to="/" className="btn btn-outline-primary">Accueil </Link>&nbsp;&nbsp;
                    <Link to="/addtask" className="btn btn-outline-primary ">Add Task</Link>&nbsp;&nbsp;
                    */}
                    <Link to="/taskpage" className="btn btn-outline-primary ">Tasks List</Link>&nbsp;&nbsp;
                    
                    
                    
                    
                    <br/><br/>
        </nav>
        
        
        </div>
        /*<Recommandation/>*/

        )
}

export default Banner
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Banner.css';
import logo from '../assets/logo.png';
import { auth } from '../service/firebase';
//import Recommandation from './Recommandation'
//const Home = ({ user }) => {
const Banner =  ({ user }) => {
    const title = "Todo|app"
   
    return(

        /*<div className='lmj-banner'>{children}</div>*/

        <div className="banner-bootom-line">
        <div className="lmj-banner">
            <img src={logo} alt="ToDo-App" className='lmj-logo'/>
            <h2 className='lmj-title'>
                {title}
            </h2>            
        </div>
        
        <div className="lmj-user">
                              
                {user.displayName !== ""}  {
                <div align="right">
                <h4> <span></span>{user.displayName}</h4>
                <img src={user.photoURL} alt="" height="50px" width="50px" /><p></p>
                <button onClick={() => auth.signOut()}>Sign out</button>
                </div>
                } 
                
        </div>
        <nav className="nav-banner">
                    <Link to="/">Accueil &nbsp;&nbsp;</Link>
                    <Link to="/taskpage">List Tasks</Link>
        </nav>
        
        
        </div>
        /*<Recommandation/>*/

        )
}

export default Banner
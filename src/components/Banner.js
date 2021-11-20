import '../styles/Banner.css'
import logo from '../assets/logo.png'
//import Recommandation from './Recommandation'

function Banner () {
    const title = "Todo|app"
   
    return(

        /*<div className='lmj-banner'>{children}</div>*/

        <div>
        <div className="lmj-banner">
            <img src={logo} alt="la maison jungle" className='lmj-logo'/>
            <h1 className='lmj-title'>
                {title}
            </h1>
        </div>
        
        </div>
        /*<Recommandation/>*/

        )
}

export default Banner
import { signInWithGoogle } from '../service/firebase';

import '../App.css';

const Login = () => {
  return (
    <div align="center">
      <button className="button" onClick={signInWithGoogle}><i className="fab fa-google"></i>Sign in with google</button>
    </div>
  )
}

export default Login;
import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import 'firebase/auth';
import { useFirebaseApp, useUser } from 'reactfire';
import firebaseConfig from '../../firebase-config';




const Login = (props) => {
    
  const firebase = useFirebaseApp();
  const user = useUser();

  const [state, updateState] = useState({
      email: '',
      password: ''
    });

  const handleInputChange = e => {
      updateState({ ...state, [e.target.name]: e.target.value })
  }

   const login = async () => {
     await firebase.auth().signInWithEmailAndPassword(state.email, state.password);
     await props.history.push('/dashboard');
   }

  const handleSubmit = async(e) => {
      e.preventDefault();
      await firebase.auth().createUserWithEmailAndPassword(state.email, state.password);
      /* if(state.username === 'fuga' && state.password === 'fuga') {
          props.history.push('/dashboard/list-book');
      } */
  }

    return (
        <>
        <div className="div-class">
          <p className="label-class">Username</p>
          <input className="input-class" placeholder="Email" type="email" onChange={handleInputChange} name="email" value={state.email || ''} required />
          <p className="label-class">Password</p>
          <input className="input-class" placeholder="Password" type="password" onChange={handleInputChange} name="password" value={state.password || ''} required/>         
          <button className="button-class" onClick={login}>Login</button>
        </div>           
        </>
    );
}

export default withRouter(Login);
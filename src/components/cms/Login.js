import React, { useState, useEffect } from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';




const Login = (props) => {

    const [state, updateState] = useState({
        username: '',
        password: ''
      });

    const handleInputChange = e => {
        updateState({ ...state, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(state.username === 'fuga' && state.password === 'fuga') {
            props.history.push('/dashboard');
        }
    }

    return (
        <>
        <form className="form-class" onSubmit={handleSubmit}>
        <div className="div-class">
          <p className="label-class">Username</p>
          <input className="input-class" placeholder="Username" type="text" onChange={handleInputChange} name="username" value={state.username || ''} required />
          <p className="label-class">Password</p>
          <input className="input-class" placeholder="Password" type="text" onChange={handleInputChange} name="password" value={state.password || ''} required/>

         
          <button className="button-class" type="submit">Login</button>

        </div>
      </form>
            
        </>
    );
}

export default withRouter(Login);
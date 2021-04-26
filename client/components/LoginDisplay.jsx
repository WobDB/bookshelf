import React from 'react';
import { Link } from 'react-router-dom';

export default ({ login }) => {

  return (
    <div id='login-form-container' className='user-credential-form-container'>
      <h1>Bookshelf</h1>
      
      <form onSubmit={(e) => login(e)}>
        <div className='loginItem'>
          <label htmlFor='login-username'>Username</label>
          <input type='text' id='login-username'></input>
        </div>
        
        <div className='loginItem'>
          <label htmlFor='login-password'>Password</label>
          <input type='password' id='login-password'></input>
        </div>

        <input type='submit' id='loginButton' value='Log in'></input>
      </form>

      <Link to='/signup'>
       <p id='signupLink'>New? Get started here.</p>
      </Link>
      
    </div>
  )
}
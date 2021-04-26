import React from 'react';

export default ({ login }) => {

  return (
    <div id='login-form-container' className='user-credential-form-container'>
      <h1>Welcome!</h1>
      
      <form onSubmit={(e) => login(e)}>

        <label htmlFor='login-username'>Username</label>
        <input type='text' id='login-username'></input>

        <label htmlFor='login-password'>Password</label>
        <input type='password' id='login-password'></input>

        <input type='submit' value='Login!'></input>
      </form>
    </div>
  )
}
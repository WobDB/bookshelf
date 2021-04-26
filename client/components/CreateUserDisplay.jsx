import React from 'react';

export default ({ createUser }) => {

  return (
    <div id='create-user-form-container' className='user-credential-form-container'>
    <h1>Register!</h1>

    <form onSubmit={(e) => createUser(e)}>

      <label htmlFor='create-username'>Username</label>
      <input type='text' id='create-username'></input>

      <label htmlFor='create-password'>Password</label>
      <input type='password' id='create-password'></input>

      <label htmlFor='create-email'>Email</label>
      <input type='text' id='create-email'></input>

      <label htmlFor='create-first-name'>First Name</label>
      <input type='text' id='create-first-name'></input>

      <label htmlFor='create-last-name'>Last Name</label>
      <input type='text' id='create-last-name'></input>

      <input type='submit' value='Sign up'></input>
    </form>

    </div>
  )
}

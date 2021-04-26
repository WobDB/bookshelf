import React from 'react';

export default ({ createUser }) => {

  return (
    <div id='create-user-form-container' className='user-credential-form-container'>
      <h1>Bookshelf</h1>
      <h2>Create an account</h2>

      <form onSubmit={(e) => createUser(e)}>
        <div>
          <label htmlFor='create-username'>Username</label>
          <input type='text' class='create-field' id='create-username'></input>
        </div>

        <div>
          <label htmlFor='create-password'>Password</label>
          <input type='password' class='create-field' id='create-password'></input>
        </div>

        <div>
          <label htmlFor='create-email'>Email</label>
          <input type='text' class='create-field' id='create-email'></input>
        </div>

        <div>
          <label htmlFor='create-first-name'>First Name</label>
          <input type='text' class='create-field' id='create-first-name'></input>
        </div>
        
        <div>
          <label htmlFor='create-last-name'>Last Name</label>
          <input type='text' class='create-field' id='create-last-name'></input>
        </div>

        <input type='submit' id='create-button' value='Sign up now'></input>
      </form>

    </div>
  )
}

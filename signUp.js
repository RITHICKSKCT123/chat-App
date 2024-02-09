import React from 'react';
import './signUp.css';

function PerseaLoginn() {
  return (
    <div className="login-box">
      <h2>Sign Up</h2>
      <form>
        <div className="user-box">
          <input type="text" name="username" required />
          <label>Email</label>
        </div>
        <div className="user-box">
          <input type="text" name="username" required />
          <label>Username</label>
        </div>
        <div className="user-box">
          <input type="password" name="password" required />
          <label>Password</label>
        </div>
        <div className="user-box">
          <input type="password" name="confirmPassword" required />
          <label>Confirm Password</label>
        </div>
        <a href="https://codepen.io/Marvelle/full/YzQqmGr">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          SignUp
        </a>
      </form>
    </div>
  );
}

export default PerseaLoginn;
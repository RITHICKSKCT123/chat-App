import React from 'react';
import './signIn.css';
function PerseaLogin() {
  return (
    <div className="login-box">
      <h2>𝐋𝐨𝐠𝐢𝐧</h2>
      <form>
        <div className="user-box">
          <input type="text" name="" required="" />
          <label>Username</label>
        </div>
        <div className="user-box">
          <input type="password" name="" required="" />
          <label>Password</label>
        </div>
        <a href="https://codepen.io/Marvelle/full/YzQqmGr">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </a>
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

export default PerseaLogin;

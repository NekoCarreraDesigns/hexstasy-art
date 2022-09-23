import axios from "axios";
import React from "react";

function getUser() {
  return axios.get("http://localhost:3000/user");
}

function SignIn() {
  return (
    <form>
      <label>Username</label>
      <br />
      <input id='username' type='text'></input>
      <label>Password</label>
      <br />
      <input id='password' type='password'></input>
      <button type='submit' onClick={getUser}></button>
    </form>
  );
}

export default SignIn;

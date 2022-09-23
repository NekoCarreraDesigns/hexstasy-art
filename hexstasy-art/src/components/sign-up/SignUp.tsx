import React from "react";
import axios from "axios";

function addUser() {
  return axios.post("http://localhost:3000/add/user");
}

function SignUp(username: string, password: string, name: string) {
  return (
    <form>
      <label>Name</label>
      <br />
      <input type='text' id='name'></input>
      <label>Username</label>
      <br />
      <input type='text' id='username'></input>
      <label>Password</label>
      <input type='password' id='password'></input>
      <label>Re-enter Password</label>
      <input type='password' id='password'></input>
      <button type='submit' onClick={addUser}>
        Submit
      </button>
    </form>
  );
}

export default SignUp;

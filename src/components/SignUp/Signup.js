import React, { useState } from 'react';
import UserServices from "../../services/user";
import { login } from "../../functions/functions";

function Signup(props) {
  const [userData, setUserData] = useState({
    username: '',
    password: ''
  });
  const [requestStatus, setRequestStatus] = useState('');

  const handleChange = (e) => {
    e.preventDefault();

    const userDetails = { ...userData,
      [e.target.name] : e.target.value
    }
    setUserData(userDetails);
  }

  const register = (e) => {
    e.preventDefault();

    const user = {
      username: userData.username,
      password: userData.password
    }

    UserServices.register(user)
      .then((response) => {
        setRequestStatus(response.data.status);
        login(user, props.userLogin)
      })
      .catch((error) => {
        if (error.response) {
          setRequestStatus(error.response.data.error);
        }
      })
  }

  return(
    <div>
      <h1>Sign up for free</h1>
      <form>
        <label>Username</label>
        <input type="text" name="username" onChange={handleChange} value={userData.username}></input>

        <label>Password</label>
        <input type="text" name="password" onChange={handleChange} value={userData.password}></input>

        <button onClick={register}>Register</button>
      </form>
      <span>{requestStatus}</span>
    </div>
  )
}

export default Signup;
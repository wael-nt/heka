import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import AuthService from "../Services/Auth-Service";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await AuthService.login(email, password).then(
        (response) => {
          console.log(response);
          saveSession(response, email)
          navigate("/");
          //  window.location.reload();
        },
        (error) => {
          console.log(error);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  const saveSession = (auth, email) => {
    const obj = {
      auth: auth,
      email: email
    }
    window.localStorage.setItem('cred', JSON.stringify(obj))
  }
  return (
    <div>
      <div className='content'>
        <form onSubmit={handleLogin}>
          <h3>Login</h3>
          <input
            className='form-control'
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className='form-control'
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className='btn' type="submit">Log in</button>
        </form>
      </div>
    </div>
  )
}

export default SignIn
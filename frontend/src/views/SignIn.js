import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../Services/Auth-Service";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await AuthService.login(email, password).then(
        (response) => {
          console.log("HERE IS RESPONE");
          console.log(response);
          console.log("HERE IS RESPONE with email");
          saveSession(response, email);
          navigate("/");
          document.location.reload();
          //window.location.reload();
        },
        (error) => {
          console.log(error);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  const saveSession = (respone, email) => {
    const obj = {
      respone: respone,
      email: email,
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
          <p>Don't have an account ? <Link to={'/signup'}>Create new account</Link></p>
        </form>
      </div>
    </div>
  )
}

export default SignIn
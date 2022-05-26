import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
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
          console.log("response")
           console.log(response.data.jwt);
          saveSession(response.data, email);
          saveToken(response.data.jwt);
          navigate("/");
          document.location.reload();
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

  const saveToken = (jwt,email) => {
    const obj = {
      accessToken: jwt,
    }
    window.localStorage.setItem('auth-token', JSON.stringify(obj))
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
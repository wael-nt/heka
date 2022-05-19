import React, { useState } from "react";
import AuthService from "../Services/Auth-Service";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await AuthService.signup(email, password,name,height,weight,age,sex).then(
        (response) => {
          // check for token and user already exists with 200
          console.log("Sign up successfully", response);
          // navigate("/");
          // window.location.reload();
        },
        (error) => {
          console.log(error);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
       <div className='content'>
      <form onSubmit={handleSignup}>
        <h3>Sign up</h3>
        <input
        className="form-control"
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
        className="form-control"
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
         className="form-control"
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
        className="form-control"
          type="number"
          placeholder="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <input
        className="form-control"
          type="number"
          placeholder="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <input
        className="form-control"
          type="number"
          placeholder="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
        className="form-control"
          type="text"
          placeholder="sex"
          value={sex}
          onChange={(e) => setSex(e.target.value)}
        />
        <button className="btn" type="submit">Sign up</button>
      </form>
      </div>
    </div>
  );
};

export default Signup;
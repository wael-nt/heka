import React, { useState } from "react";
import AuthService from "../Services/Auth-Service";
import { useNavigate } from "react-router-dom";
import { useFilePicker } from "use-file-picker";
import { Avatar } from 'antd';

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [photo, setPhoto] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    console.log(filesContent[0].content);
     const file = filesContent[0].content;
    setPhoto(file);
    try {
      await AuthService.signup(email, password,name,height,weight,age,sex,photo).then(
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
  const [openFileSelector, { filesContent, loading, errors }] = useFilePicker({
    readAs: "DataURL",
    accept: "image/*",
    multiple: true,
    limitFilesConfig: { max: 2 },
    // minFileSize: 1,
    maxFileSize: 50 // in megabytes
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (errors.length) {
    return <div>Error...</div>;
  }
  
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
           <div>
        {filesContent.map((file, index) => (
          <Avatar src={file.content} size={{ xs: 40, sm: 50, md: 40, lg: 64, xl: 80, xxl: 280 }} />
        ))}
      </div>
      <div>
        <button className='button' onClick={() => openFileSelector()}>Select profile picture </button>
      </div>
        <button className="btn" type="submit">Sign up</button>
      </form>
      </div>
    </div>
  );
};

export default Signup;
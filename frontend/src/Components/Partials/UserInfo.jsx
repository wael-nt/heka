import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import ProfilePic from '../Partials/ProfilePic';
import UserGoal from "../../Components/Partials/UserGoal";
import BmiCalculator from "../../Components/Partials/BmiCalculator";
import authHeader from '../../Services/Auth-Header';
const API_URL ='https://boiling-wave-51445.herokuapp.com/heka/api';
let nav
function UserInfo() {
  const [pic, setPic] = useState('')
  let obj
  nav = useNavigate();
  if (checkSession()) {
    obj = getObject()
  } else {
    obj = {
      name: "name",
      age: "age",
      height: "height",
      weight: "weight"
    }
  }
    console.log(pic)
  return (
    <>
      <div class="userinfo-container">
        <div className='row'>
          <div className="col center">
            <form onSubmit={handleSubmit}>
             <h2>Edit profile details</h2> 
                  <input type="text" id="name" class="form-control" placeholder={obj.name?obj.name:"Name"} name='name'></input>
                  <input type="number" id="height" class="form-control" placeholder={obj.height?obj.height:"height"} name='height'></input> 
                  <input type="number" id="weight" class="form-control"  placeholder={obj.weight?obj.weight:"weight"} name='weight'></input>
                  <input type="number" id="age" class="form-control" placeholder={obj.age?obj.age:"age"} name='age'></input>     
                  <select className='form-select' name='sex'>
                    <option>Select sex</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Non binary</option>
                  </select>     
                  <input type="password" name="currentPassword" class="form-control" placeholder='Password'></input>
                  <input type="password" name="newPassword" class="form-control" placeholder='NewPassword'></input>
                  <button type="submit" class="btn mt-3 mb-3">Update details</button>
            </form>
             </div>
            <div className="col">
            <h2>Update profile picture</h2> 
               <ProfilePic setPhoto ={setPic}/>
            </div>
          <div className="col">
            <UserGoal />
          </div>
          <div className="col">
         <BmiCalculator /> 
        </div>
          </div>
        </div>
    </>
  )
}

UserInfo.propTypes = {

}
async function handleSubmit(event) {
  event.preventDefault()
  let savedEmail = JSON.parse(window.localStorage.getItem('cred'))
  let token = JSON.stringify(window.localStorage.getItem('auth-token'))
  console.log(token)
  console.log("photo")
  console.log(savedEmail.respone.photo);
  if (savedEmail == null) {
    alert('Login or create an account')
    nav("/signin")
  }
  let data = {
    name: event.target.elements.name.value,
    email: savedEmail.email,  // get from saved session or something
    height: event.target.elements.height.value,
    weight: event.target.elements.weight.value,
    age: event.target.elements.age.value,
    sex: event.target.elements.sex.value,
    newPassword: event.target.elements.newPassword.value,
    currentPassword: event.target.elements.currentPassword.value,
    photo: document.getElementById('profile_pic')?.src?document.getElementById('profile_pic')?.src:savedEmail.photo
  }
  console.log("DATA")
  console.log(data);

  await postUpdate(data);
}

const saveSession = (respone, email) => {
  const obj = {
    respone: respone,
    email: email,
  }
  window.localStorage.setItem('cred', JSON.stringify(obj))
}

async function postUpdate(userData) {
  let token = authHeader();
  console.log(token.accessToken);
  const requestOptions = {
    method: 'PUT',
    mode: 'cors',
    body: JSON.stringify(userData),
    headers: { 'Content-Type': 'application/json' ,
    'auth-token':token},
  };
  const response = await fetch(API_URL+'/users/edit', requestOptions);
   
  console.log(response)
  const res = await response.json();
  window.localStorage.removeItem('cred')
  handleRes(res)
  console.log("passed handleRes")
  saveSession(res, res.email);
  window.alert("Your user information have been updated !")
  window.location.reload();
}

function handleRes(results) {
  console.log("entring handleRes")
  window.localStorage.setItem('cred', JSON.stringify(results))
}

const checkSession = function () {
  return (window.localStorage.getItem('cred') != null)
}

const getObject = function () {
  return JSON.parse(window.localStorage.getItem('cred'))
}
export default UserInfo


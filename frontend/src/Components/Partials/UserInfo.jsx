import React, { useEffect } from 'react'
import { Form } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import ProfilePic from '../Partials/ProfilePic';


let nav
function UserInfo() {
  let obj

  nav = useNavigate();
  console.log(window.sessionStorage.getItem('userinfo'));


  if (checkSession()) {
    console.log('yess');
    obj = getObject()
  } else {
    obj = {
      name: "name",
      age: "age",
      height: "height",
      weight: "weight"
    }
  }
  useEffect(() => {
    let savedEmail = JSON.parse(window.localStorage.getItem('cred'))
    console.log(savedEmail);
    if (savedEmail == null) {
      alert('Login or create an account')
      nav("/signIn")
    }
  }, [])

  return (
    <>
      <div className='content'>
        <h2>Edit profile details</h2>
        <div className="container bg-gradient">
          <div className="row">
            <div className="col-lg-7">
              <Form onSubmit={handleSubmit}>
                <div className="row g-3 ms-3 align-items-center">
                  <div className="col-auto">
                    <label htmlFor='name' className="col-form-label">Name</label>
                  </div>
                  <div className="col-auto">
                    <input type="text" id="name" className="form-control" aria-describedby="name" placeholder={obj.name} name='name'></input>
                  </div>
                </div>

                <div className="row g-3 ms-3 align-items-center">
                  <div className="col-auto">
                    <label htmlFor="height" className="col-form-label">Height</label>
                  </div>
                  <div className="col-auto">
                    <input type="number" id="height" className="form-control" aria-describedby="name" placeholder={obj.height} name='height'></input>
                  </div>
                </div>

                <div className="row g-3 ms-3 align-items-center">
                  <div className="col-auto">
                    <label htmlFor="weight" className="col-form-label">Weight</label>
                  </div>
                  <div className="col-auto">
                    <input type="number" id="weight" className="form-control" aria-describedby="name" placeholder={obj.weight} name='weight'></input>
                  </div>
                </div>

                <div className="row g-3 ms-3 align-items-center">
                  <div className="col-auto">
                    <label htmlFor="age" className="col-form-label">Age</label>
                  </div>
                  <div className="col-auto">
                    <input type="number" id="age" className="form-control" aria-describedby="name" placeholder={obj.age} name='age'></input>
                  </div>
                </div>

                <div className="row g-3 ms-3 align-items-center">
                  <div className="col-auto">
                    <label htmlFor="sex" className="col-form-label">Age</label>
                    <select name='sex'>
                      <option>Select sex</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Non binary</option>
                    </select>
                  </div>

                </div>

                <div className="row g-3 ms-3 align-items-center">
                  <div className="col-auto">
                    <label htmlFor="currentPassword" className="col-form-label">Current password</label>
                  </div>
                  <div className="col-auto">
                    <input type="password" name="currentPassword" className="form-control" aria-describedby="password"></input>
                  </div>
                </div>

                <div className="row g-3 ms-3 align-items-center">
                  <div className="col-auto">
                    <label htmlFor="newPassword" className="col-form-label">New password</label>
                  </div>
                  <div className="col-auto">
                    <input type="password" name="newPassword" className="form-control" aria-describedby="password" show></input>
                  </div>
                </div>

                <div className="row g-3 ms-3 align-items-center">
                  <div className="col-auto">
                    <button type="submit" className="btn btn-lg btn-outline-light">Update details</button>
                  </div>
                  <br /><br /><br /><br /><br />
                </div>
              </Form>
            </div>
            <div className="col-lg">
              <ProfilePic />
            </div>
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
  console.log(savedEmail);
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
    currentPassword: event.target.elements.currentPassword.value
  }
  console.log(data);
  await postUpdate(data)
}

async function postUpdate(userData) {
  const requestOptions = {
    method: 'PUT',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData)
  };
  const response = await fetch('http://127.0.0.1:4300/heka/api/users/edit', requestOptions);
  const res = await response.json();
  console.log(res);
  handleRes(res)
}

function handleRes(results) {
  window.sessionStorage.setItem('userinfo', JSON.stringify(results))
}

const checkSession = function () {
  return (window.sessionStorage.getItem('userinfo') != null)
}

const getObject = function () {
  return JSON.parse(window.sessionStorage.getItem('userinfo'))
}
export default UserInfo


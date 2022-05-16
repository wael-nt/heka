import React from 'react'
import { Form } from 'react-bootstrap'

import "./Profile.css";

function Profile() {

  let name = 'Wills'
  return (
    <>
      <div className='content'>
        <h2>Edit profile details</h2>
        <div class="container bg-gradient">
          <div class="row">
            <div class="col-lg-7">
              <Form onSubmit={handleSubmit}>
                <div class="row g-3 ms-3 align-items-center">
                  <div class="col-auto">
                    <label for="name" class="col-form-label">Name</label>
                  </div>
                  <div class="col-auto">
                    <input type="text" id="name" class="form-control" aria-describedby="name" placeholder={name} name='name'></input>
                  </div>
                </div>

                <div class="row g-3 ms-3 align-items-center">
                  <div class="col-auto">
                    <label for="height" class="col-form-label">Height</label>
                  </div>
                  <div class="col-auto">
                    <input type="number" id="height" class="form-control" aria-describedby="name" placeholder='178' name='height'></input>
                  </div>
                </div>

                <div class="row g-3 ms-3 align-items-center">
                  <div class="col-auto">
                    <label for="weight" class="col-form-label">Weight</label>
                  </div>
                  <div class="col-auto">
                    <input type="number" id="weight" class="form-control" aria-describedby="name" placeholder='45' name='weight'></input>
                  </div>
                </div>

                <div class="row g-3 ms-3 align-items-center">
                  <div class="col-auto">
                    <label for="age" class="col-form-label">Age</label>
                  </div>
                  <div class="col-auto">
                    <input type="number" id="age" class="form-control" aria-describedby="name" placeholder='45' name='age'></input>
                  </div>
                </div>

                <div class="row g-3 ms-3 align-items-center">
                  <div class="col-auto">
                    <label for="age" class="col-form-label">Age</label>
                    <select name='sex'>
                      <option>Select sex</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Non binary</option>
                    </select>
                  </div>

                </div>

                <div class="row g-3 ms-3 align-items-center">
                  <div class="col-auto">
                    <label for="currentPassword" class="col-form-label">Current password</label>
                  </div>
                  <div class="col-auto">
                    <input type="password" name="currentPassword" class="form-control" aria-describedby="password"></input>
                  </div>
                </div>

                <div class="row g-3 ms-3 align-items-center">
                  <div class="col-auto">
                    <label for="newPassword" class="col-form-label">New password</label>
                  </div>
                  <div class="col-auto">
                    <input type="password" name="newPassword" class="form-control" aria-describedby="password" show></input>
                  </div>
                </div>

                <div class="row g-3 ms-3 align-items-center">
                  <div class="col-auto">
                    <button type="submit" class="btn btn-lg btn-outline-light">Update details</button>
                  </div>
                  <br /><br /><br /><br /><br />
                </div>
              </Form>
            </div>
            <div class="col-lg">
              <img src="https://slm-assets.secondlife.com/assets/24624098/view_large/Snapshot_004.jpg?1569839952" style={{ 'border-radius': "30%" }} width="70%" alt="" srcset=""></img>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

async function handleSubmit(event) {
  event.preventDefault()

  let data = {
    name: event.target.elements.name.value,
    email: 'wills@mail.com',  // get from saved session or something
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
}

export default Profile

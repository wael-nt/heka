import React from 'react'
import UserInfo from '../Components/Partials/UserInfo';
import "./Profile.css";

function Profile() {
  return (
    <>
      <div className='content'>
        <div className='row'>
          <UserInfo />
        </div>
        <div className='row'>
          <div className='col-sm-12 col-md-6'>
            <h1>Goal settings</h1>
            <form>
              <label for="fname">Calories:</label><br></br>
              <input type="text" id="calGoal" value="1500"></input><br></br>
              <label for="lname">Protien:</label><br></br>
              <input type="text" id="protienGoal" value="120"></input><br></br>
              <input type="submit" value="Save"></input>
            </form>
          </div>
        </div>
      </div>
    </>

  )
}

export default Profile

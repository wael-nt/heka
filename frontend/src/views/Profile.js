import React from 'react'
import UserInfo from '../Components/Partials/UserInfo';
import ProfilePic from '../Components/Partials/ProfilePic';
import "./Profile.css";

function Profile() {
  return (
    <>
   <div className='content'>
<h1>
  THIS IS THE Profile PAGE
        </h1>
        <div className='row'>
          <div className='col-sm-12 col-md-5'>
            <UserInfo/>
          </div>
          <div className='col-sm-12 col-md-5'>
            <h1>Profile pic</h1>
            <ProfilePic/>
        </div>
         </div>
        <div className='row'>
          <div className='col-sm-12 col-md-5'>
            <h1>Weight loss Calculator</h1>
            <div id="weightloss_widget_code"></div>
<script src="https://calculator-online.net/assets/widget/lib/weightloss-widget.js?1652473613"></script>
          </div>
          <div className='col-sm-12 col-md-5'>
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

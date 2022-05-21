import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import axios from "axios";


function UserGoal() { 
  let nav = useNavigate();
  var API_URL = new URL('http://localhost:4300/heka/api/goals/getgoal')

  const [email, setEmail] = useState('')
    const getAuth = () => {
    let userObj = window.localStorage.getItem('cred')
    if (userObj == null) {
      return null
    } else
      return JSON.parse(userObj)
  }
  var params = {email:email}
  useEffect(() => {
    setEmail(getAuth().email);
    console.log(email);
    if (email == null) {
      alert('Login or create an account')
      nav("/signIn")
    }
  }, []);

  const handleOnClick = async () => {
    axios.get(API_URL + `/${email}`)
          .then((res) => {
            let goal = res.data;
            console.log(goal);
          });

  }
   

 return (
   <>
     <h1>Goal settings</h1>
            <form>
              <label htmlFor='calGoal'>Calories:</label><br></br>
              <input type="text" id="calGoal"></input><br></br>
              <label htmlFor='protienGoal'>Protien:</label><br></br>
              <input type="text" id="protienGoal"></input><br></br>
              <button type="button" className='btn'  onClick={handleOnClick}>Save</button>
            </form>
  </> 
)
} 

export default UserGoal 
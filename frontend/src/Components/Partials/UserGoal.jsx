import React, { useEffect, useState } from 'react'
import axios from "axios";


function UserGoal() { 
  const API_URL ='https://boiling-wave-51445.herokuapp.com/heka/api/goals/updategoal';
  const [email, setEmail] = useState('')
  const [cal, setCal] = useState(0)
  const [pro, setPro] = useState(0)

    const getAuth = () => {
    let userObj = window.localStorage.getItem('cred')
    if (userObj == null) {
      return null
    } else
      return JSON.parse(userObj)
  }
  
  useEffect(() => {
    setEmail(getAuth().email);
    console.log(email);
  }, [email]);

  const handleCalChange = function (e) {
  console.log(e.target.value)
    setCal(e.target.value) 
  }
  const handleProChange = function (e) {
    console.log(e.target.value)
   setPro(e.target.value) 
}

  const handleOnClick = async (event) => {
    event.preventDefault();
    
    let body = {
    "owner": email,
    "calories": cal,
    "protein":pro
  }
    try {
    console.log(body)
    const { data } = await axios({
        method: 'PUT',
        url: API_URL,
        headers: { 'Content-Type': 'application/json' },
        data: JSON.stringify(body) 
    });
    console.log(body)
    console.log(data);
} catch (err) {
    console.log(err.message);
}

  }
   

 return (
   <>
            <form onSubmit={handleOnClick}>
               <h1>Current Nutrition</h1>
              <input type="number" id="calGoal" className='form-control' placeholder='calories'  onChange={handleCalChange}></input><br></br>
              <input type="number" id="protienGoal" className='form-control' placeholder='protein'  onChange={handleProChange}></input><br></br>
              <button type="submit" className='btn'>Save</button>
            </form>
  </> 
)
} 

export default UserGoal 
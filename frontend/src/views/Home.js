import React from 'react'
import axios from "axios";
import  { useEffect, useState } from 'react'
import Pie from '../Components/Partials/Pie';
import DailyMeals from '../Components/Partials/DailyMeals';
import DailyQuotes from '../Components/Partials/DailyQuotes';
import Bar from '../Components/Partials/Bar';
import "./Home.css";
import BmiCalculator from '../Components/Partials/BmiCalculator';


const colors = ['#69BC45', 'yellow', 'purple'];
const API_URL = 'http://localhost:4300/heka/api/goals/get';
  
  function Home() {
    const [email , setEmail] = useState('')
    const [calories , setCalories] = useState(0)
    const [protein , setProtein] = useState(0)

    // Sample data
    const pieItems = [{ title: "Calories %", value: calories, color: colors[0] },
    {title: "Protein %", value: protein, color: colors[1] }];

    const getAuth = () => {
      let userObj = window.localStorage.getItem('cred')
      if (userObj == null) {
        return null
      } else
        return JSON.parse(userObj)
    }

    const getUserGoal = async () => {
    let res =  await axios.get(API_URL,{params: {"owner": email}})
    console.log(res.data.calories)
    console.log(res.data.protein)
    setCalories(parseInt(res.data.calories))
    setProtein(parseInt(res.data.protein))
    return res
    }

    useEffect(()=>{
    setEmail(getAuth().email)
    console.log(email)
    getUserGoal();
    })
 
    
  return (
    <div className='content'>
      <div className='row'>
        <div className='dailymeals col'>
           <h1>Goal</h1>
          <Bar name='Protein' value={protein} />
          <br/>
          <Bar name='Calories' value={calories} /> 
          {/* <DailyMeals /> */}
        </div>
        <div className='dailyqotues col-2'>
          <h1>Daily quotes</h1>
          <DailyQuotes />
        </div>
      </div>
      <div className='row'>
        <div className='barchart col'>
        <BmiCalculator /> 
          {/* <h1>Goal</h1>
          <Bar name='Protein' value={protein} />
          <br/>
          <Bar name='Calories' value={calories} /> */}
        </div>
        <div className='piechart col-2'>
          <Pie items={pieItems} title="Goal"/>
          <div className='center'>
          <div class='box yellow'><h4> Protien : {protein}</h4></div>
           <div class='box green'><h4>Calories: {calories}</h4></div>
          </div>
          </div>
      </div>
    </div>
  )
}

export default Home

import React from 'react'
import axios from "axios";
import  { useEffect, useState } from 'react'
import Pie from '../Components/Partials/Pie';
import DailyQuotes from '../Components/Partials/DailyQuotes';
import Bar from '../Components/Partials/Bar';
import "./Home.css";
import BmiCalculator from '../Components/Partials/BmiCalculator';


const colors = ['#69BC45', 'yellow', 'purple'];
const API_URL ='https://boiling-wave-51445.herokuapp.com/heka/api/goals/get';
const Protein_Goal = 200;
const Calories_Goal = 2000;

  function Home() {
    const [email , setEmail] = useState('')
    const [calories , setCalories] = useState(0)
    const [protein , setProtein] = useState(0)
    const [goal , setGol] = useState({})


    // Sample data
    const pieItems = [{ title: "Calories %", value: calories, color: colors[0] },
    {title: "Protein %", value: protein, color: colors[1] }];

    const getAuth = () => {
      let userObj = window?.localStorage?.getItem('cred')
      if (userObj == null) {
        return null
      } else
        return JSON.parse(userObj)
    }


    useEffect(()=>{
      if(getAuth()?.email?.length>1){
        setEmail(getAuth().email)
        console.log(email)
       setGol(CalculateGoal(protein,calories)) 
       const getUserGoal = async () => {
        if(email?.length>1){
          let res =  await axios.get(API_URL,{params: {"owner": email}})
      console.log(res?.data?.calories)
      console.log(res?.data?.protein)
      setCalories(parseInt(res?.data?.calories))
      setProtein(parseInt(res?.data?.protein))
      return res
        }
      }  
        getUserGoal();
      }
    },[calories, email,protein])
 
    
  return (
    <div className='content'>
      <div className='row'>
        <div className='dailymeals col'>
           <h1>Nutrition Goal</h1>
          <Bar name='Protein' value={goal.calProtien} />
          <br/>
          <Bar name='Calories' value={goal.calCalorie} /> 
        </div>
        <div className='dailyqotues col-2'>
          <h1>Daily quotes</h1>
          <DailyQuotes />
        </div>
      </div>
      <div className='row'>
        <div className='barchart col'>
        <BmiCalculator /> 
        </div>
        <div className='piechart col-2'>
          <Pie items={pieItems} title="Nutrition"/>
          <div className='center'>
          <div className='box yellow'><h4> Protien : {protein}</h4></div>
           <div className='box green'><h4>Calories: {calories}</h4></div>
          </div>
          </div>
      </div>
    </div>
  )
}

function CalculateGoal(protein , calories){
let calProtien = (protein/Protein_Goal * 100) ;
let calCalorie = (calories/Calories_Goal * 100) ;
return {calProtien,calCalorie}
}

export default Home

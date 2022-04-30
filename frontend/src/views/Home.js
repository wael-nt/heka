import React from 'react'
import ReactDOM from 'react-dom/client';
import "./Home.css";
import Pie from '../Components/Partials/Pie';
import DailyMeals from '../Components/Partials/DailyMeals';
import Bar from '../Components/Partials/Bar';

function Home() {
  return (
    <>
    <div className='content'>
    <div className='row'>
    <div className='dailymeals col-sm-12 col-md-5'>
      <h1>Daily Meals</h1>
      <DailyMeals/>
    </div>
    <div className='dailyqotues col-sm-12 col-md-5'>
      <h1>Daily qotues</h1>
    </div>
    </div>
    <div className='row'>
    <div className='barchart col-sm-12 col-md-5'>
        <h1>Bar chart</h1>
        <Bar/>
        </div>
        <div className='piechart col-sm-12 col-md-5 justify-content-center d-flex'>
        <Pie/>
        </div>
    </div>
      </div>
   
    </>
  
  )
}

export default Home

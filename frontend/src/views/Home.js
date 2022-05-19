import React from 'react'
import Pie from '../Components/Partials/Pie';
import DailyMeals from '../Components/Partials/DailyMeals';
import DailyQuotes from '../Components/Partials/DailyQuotes';
import Bar from '../Components/Partials/Bar';

import "./Home.css";
import BmiCalculator from '../Components/Partials/BmiCalculator';

const colors = ['#69BC45', 'yellow', 'purple'];

const pieItems = [{ title: "Protein %", value: 60, color: colors[0] },
{ title: "Fat %", value: 20, color: colors[1] },
{ title: "Carbs %", value: 20, color: colors[2] }]

function Home() {
  return (
    <>
      <div className='content'>
        <div className='row'>
          <div className='dailymeals col-sm-12 col-md-5'>
            <h1>Daily Meals</h1>
            <DailyMeals />
          </div>
          <div className='dailyqotues col-sm-12 col-md-5'>
            <h1>Daily qotues</h1>
            <DailyQuotes />
          </div>
        </div>
        <div className='row'>
          <div className='barchart col-sm-12 col-md-5'>
            <h1>Bar chart</h1>
            <Bar />
          </div>
          <div className='piechart col-sm-12 col-md-5 justify-content-center d-flex'>
            <Pie items={pieItems} title="Goals" />
            <BmiCalculator />
          </div>
        </div>
      </div>

    </>

  )
}

export default Home

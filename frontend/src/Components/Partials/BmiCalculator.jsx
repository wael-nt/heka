import React from 'react'
import { useState, useEffect } from 'react'
import BmiCalculatorStyle from '../../Components/Sass/BmiCalculator.css';
const BmiCalculator = () => {
    const [height, setHeight] = useState();
    const [mass, setMass] = useState();
    const [bmi, setBmi] = useState();
    const calculate = (e) => {
        e.preventDefault();
        const formValid = +height > 0 && +mass > 0;
        if (!formValid) {
            return;
        }
        const bmi = +mass / (+height) ** 2;
        setBmi(bmi);
    }
    return (
        <div>
            <h2>Claculate BMI</h2>
            <div className='BmiCalculator container'>
            <form onSubmit={calculate}>
          <input id='height' value={height} onChange={(e) => setHeight(e.target.value)} placeholder="height in meters: " className='form-control'/>
          <input value={mass} onChange={(e) => setMass(e.target.value)} placeholder="mass in kg: " className='form-control'/>
        <button className='btn btn-warning' type="submit">calculate</button>
            </form>
        <h3>{bmi==null?"Your bmi :":bmi}</h3>
        </div>
    </div>
    )
}

export default BmiCalculator

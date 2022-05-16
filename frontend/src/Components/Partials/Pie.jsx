import React from 'react'
import { PieChart } from 'react-minimal-pie-chart';

function Pie() {
  return (
    <div>
      <h1>Goal</h1>
      <PieChart
        data={[
          { title: 'Carb', value: 60, color: '#69BC45', key: "Carb" },
          { title: 'Protien', value: 20, color: '#D6D4D4', key: "Protien" },
        ]}
        animationDuration="1000"
        radius="40"
        lineWidth={40}
        rounded={true}
        center={[50, 40]}
        animationEasing="out"
      />
    </div>
  )
}

export default Pie

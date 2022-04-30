import React from 'react'
import { PieChart } from 'react-minimal-pie-chart';

function Pie() {
  return (
    <div>
      <PieChart
        data={[
          { title: 'One', value: 60, color: '#726875' },
          { title: 'Two', value: 20, color: '#D6D4D4' },
        ]}
        animationDuration="10000"
        radius="40"
      />;
    </div>
  )
}

export default Pie

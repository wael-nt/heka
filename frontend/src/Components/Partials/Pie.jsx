import React from 'react'
import { PieChart } from 'react-minimal-pie-chart';

 function Pie(props) {
  const data = props.items.map((item) => (
    { title: item.title, value: item.value, color: item.color, key: item.title }
  ))

  

  return (
    <div>
      <h1>{props.title}</h1>
      <PieChart
        data={data}
        animationDuration="100"
        radius="40"
        lineWidth={30}
        rounded={true}
        center={[50, 40]}
      />
    </div>
  )
}

export default Pie

import React from 'react'
import { PieChart } from 'react-minimal-pie-chart';

function Pie(props) {
  const data = props.items.map((item) => (
    { title: item.title, value: item.value, color: item.color, key: item.title }
  ))
  console.log(data)

  return (
    <div>
      <h1>{props.title}</h1>
      <PieChart
        data={data}
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

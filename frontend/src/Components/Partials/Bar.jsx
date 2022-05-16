import React from 'react'
import { Line } from 'rc-progress'

function Bar(props) {
  const name = props.name
  const value = props.value

  return (
    <>
      <label><strong>{name}({value}%)</strong></label>
      <Line percent={value} strokeWidth={4} strokeColor="#D3D3D3" label={name
      } value={value} />
      <br />
      <br />
    </>
  )
}
Bar.defaultProps = {
  name: "Protein",
  value: 23
}

export default Bar

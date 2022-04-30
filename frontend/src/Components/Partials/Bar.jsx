import React from 'react'

function Bar() {
  return (
    <>
  <label><strong>protien</strong></label>
  <div className="hbar progress-bar progress-bar-striped" role="progressbar"  aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
    50%
</div>
<label><strong>protien</strong></label>
  <div className="hbar progress-bar progress-bar-striped bg-success" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
    30%
  </div>
<label><strong>protien</strong></label>
  <div className="hbar progress-bar progress-bar-striped bg-info" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">30%</div>
<label><strong>protien</strong></label>
  <div className="hbar progress-bar progress-bar-striped bg-warning" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">30%</div>
<label><strong>protien</strong></label>
  <div className="hbar progress-bar progress-bar-striped bg-danger" role="progressbar"  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">30%</div>
</>
  )
}

export default Bar

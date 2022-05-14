import React from 'react'
import PropTypes from 'prop-types'

function UserInfo(props) {
  return (
    <>
      <div className='container userInfo'>
<div className='accordion' id="accordionExample">
  <div className='accordion-item'>
    <h2 className='accordion-header' id="headingOne">
      <button className='accordion-button' type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        User Information
      </button>
    </h2>
    <div id="collapseOne" className='accordion-collapse collapse show' aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className='accordion-body'>
        <strong>Height : </strong> 180 CM
      </div>
          </div>
          <div id="collapseOne" className='accordion-collapse collapse show' aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className='accordion-body'>
        <strong>Weight : </strong> 80 KG
      </div>
          </div>
          <div id="collapseOne" className='accordion-collapse collapse show' aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className='accordion-body'>
        <strong>Age : </strong> 30 years
      </div>
          </div>
          <div id="collapseOne" className='accordion-collapse collapse show' aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className='accordion-body'>
        <strong>more : </strong> ?
      </div>
    </div>
        </div>
        </div>
      </div>
      
    </>
  )
}

UserInfo.propTypes = {

}

export default UserInfo


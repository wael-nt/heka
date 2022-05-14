import React from 'react';
import pic from '../../Assets/profile-picture.png';

function ProfileImg() {
  return (
    <>
    <div className='container profileImageContaioner'>
        <img src={pic} alt='This is a profile img' className="profileImage"></img>
    </div>
    </>
  );
}

export default ProfileImg;

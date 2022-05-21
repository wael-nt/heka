import React from "react";
import pic from "../../Assets/profile-picture.png";
import { useCallback, useEffect, useState } from "react";
import logo from "../../Assets/pngwinggreen.png";
function ProfileImg(props) {
  const [pic, setPic] = useState("");

  const getAuth = () => {
    let userObj = window.localStorage.getItem("cred");
    if (userObj == null) {
      return null;
    } else return JSON.parse(userObj);
  };
  useEffect(() => {
    const obj = getAuth();
    if (obj != null) {
      console.log("from profile");
      setPic(obj.respone.photo);
    }
  }, []);

  return (
    <>
      <div className="container profileImageContaioner">
        <img
          src={pic ? pic : logo}
          alt="This is a profile img"
          className="profileImage"
          id="profile-img"
        ></img>
      </div>
    </>
  );
}

ProfileImg.propTypes = {};

export default ProfileImg;

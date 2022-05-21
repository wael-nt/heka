import React from "react";
import UserGoal from "../Components/Partials/UserGoal";
import UserInfo from "../Components/Partials/UserInfo";
import "./Profile.css";

function Profile() {
  return (
    <>
      <div className="content">
        <div className="row">
          <UserInfo />
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <UserGoal />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;

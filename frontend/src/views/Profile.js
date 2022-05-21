import React from "react";
import UserGoal from "../Components/Partials/UserGoal";
import UserInfo from "../Components/Partials/UserInfo";
import "./Profile.css";

function Profile() {
  return (
    <>
      <div className="content">
        <div className="row">
          <br />
          <br />
          <UserInfo />
        </div>
        <div className="row">
          <div className="col-lg">
            <h1>Weight loss Calculator</h1>
            <div id="weightloss_widget_code"></div>
            <script src="https://calculator-online.net/assets/widget/lib/weightloss-widget.js?1652473613"></script>
          </div>
          <div className="col-sm-12 col-md-5">
            <UserGoal />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;

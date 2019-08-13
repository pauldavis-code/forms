import React from "react";

import Signup from "../components/Signup";
import Login from "../components/Login"

const Homepage = (props) => {

  return(
    <div>
      <h1>Welcome to the homepage!</h1>

      <div className="row mt-4">
        <Signup />
        <Login 
          updateUser={props.updateUser}
        />
      </div>
    </div>
  );
};

export default Homepage;
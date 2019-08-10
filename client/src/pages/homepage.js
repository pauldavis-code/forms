import React from "react";

import Signup  from "../components/Signup";

function Homepage() {

  return(
    <div>
      <h1>Welcome to the homepage!</h1>

      <div className="row mt-4">
        <Signup />
      </div>
    </div>
  );
};

export default Homepage;
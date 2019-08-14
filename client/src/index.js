import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router} from 'react-router-dom' //don't need to specify localhost url in axios http address
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
<Router>
  <App /> 
</Router>,
document.getElementById("root"));
registerServiceWorker();

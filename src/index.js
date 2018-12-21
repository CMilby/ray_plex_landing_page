import React from "react";
import ReactDOM from "react-dom";

import Menu from "./Menu";

import * as serviceWorker from "./serviceWorker";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(<Menu />, document.getElementById("root"));

serviceWorker.unregister();

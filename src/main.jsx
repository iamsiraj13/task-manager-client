import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./assets/css/animate.min.css";
import "./assets/css/bootstrap.css";
import "./assets/css/dropdownmenu.css";
import "./assets/css/progress.css";
import "./assets/css/sidebar.css";
import "./assets/css/style.css";
import { Provider } from "react-redux";
import store from "./redux/store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);

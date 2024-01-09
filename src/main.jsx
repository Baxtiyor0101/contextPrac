import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
// import 'bootstrap/dist/css/boot'
import "bootstrap/dist/css/bootstrap.min.css";

// Styles
// import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// Redux
import { Provider } from "react-redux";
import store from "./Store";
import { TodoProvider } from "./Context/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <TodoProvider>
          <App />
        </TodoProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

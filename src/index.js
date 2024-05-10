import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CountContextProvider } from "./Component/CountContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CountContextProvider  value={{name : 'Himanshu' ,
       surname : "Kumar",
       age : 28,
       email : 'monu.com89@gmail.com',
       address : 'Naksha Atlantis',
    }} >
      <App />
    </CountContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

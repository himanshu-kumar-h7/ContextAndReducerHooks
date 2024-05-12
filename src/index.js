import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { DetailsContextProvider } from "./Component/DetailsContext";
import { CounterContextProvider } from "./Component/CounterContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <DetailsContextProvider
      value={{
        name : "Himanshu",
        surname: "Kumar",
        age: 28,
        email: "monu.com89@gmail1.com",
        address: "Naksha Atlantis",
      }}
    >
      <CounterContextProvider value={100}>
        <App />
      </CounterContextProvider>
    </DetailsContextProvider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

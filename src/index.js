import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import "react-day-picker/dist/style.css";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import App from "./App";
import AuthProvider from "./Context/AuthProvider";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const queryCLinet = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryCLinet}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </QueryClientProvider>
    <Toaster position="top-center"></Toaster>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

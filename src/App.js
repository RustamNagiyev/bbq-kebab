import "./App.css";
import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router";
import Home from "./components/Home";



const App = () => {
  return (
    <>
      <Header />
     

      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
     
      
    </>
  );
};

export default App;

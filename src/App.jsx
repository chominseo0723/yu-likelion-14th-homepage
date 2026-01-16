import React from "react";
import MainScreen from "./pages/MainScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainScreen/>}/>
    </Routes>
  </BrowserRouter>
  )
};

export default App;

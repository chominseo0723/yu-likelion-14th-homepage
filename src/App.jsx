import React from "react";
import MainScreen from "./pages/MainScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Recruit from "./pages/Recruit";
import Project from "./pages/Project";
import Qanda from "./pages/Qanda";
import ProjectDetail from "./pages/ProjectDetail";

const App = () => {
  return(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainScreen/>}/>
      <Route path="/recruit" element={<Recruit/>}/>
      <Route path="/project" element={<Project/>}/>
      <Route path="/project/:id" element={<ProjectDetail/>}/>
      <Route path="/qanda" element={<Qanda/>}/>
    </Routes>
  </BrowserRouter>
  )
};

export default App;

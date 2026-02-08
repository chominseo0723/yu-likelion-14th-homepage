import React from "react";
import MainScreen from "./pages/MainScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Recruit from "./pages/Recruit";
import Project from "./pages/Project";
import Qanda from "./pages/Qanda";
import ProjectDetail from "./pages/ProjectDetail";
import Chatbot from "./components/Chatbot/Chatbot";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {

  return(
  <BrowserRouter>
     <ScrollToTop /> 
    <Routes>
      <Route path="/" element={<MainScreen/>}/>
      <Route path="/recruit" element={<Recruit/>}/>
      <Route path="/project" element={<Project/>}/>
      <Route path="/project/:id" element={<ProjectDetail/>}/>
       <Route path="/recruit" element={<Recruit />} />
      <Route path="/qanda" element={<Qanda/>}/>
    </Routes>
    <Chatbot />
  </BrowserRouter>
  )
};

export default App;

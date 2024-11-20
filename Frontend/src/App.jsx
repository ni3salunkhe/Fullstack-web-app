/* eslint-disable no-unused-vars */
import React from "react";
import Home from "./home/home"
import Courses from "./Courses/Courses";
import { Route, Routes } from 'react-router-dom';
import Signup from "./components/Signup";
function App() {
  return(<>
        {/* <Home />
        <Course /> */}
        <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/course' element={<Courses />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
        </Routes>
        </div>

    </>);
  
}
export default App;
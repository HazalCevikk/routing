import * as React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import Home from './components/Home'
import About from "./components/About";
import Users from "./components/Users"
import User from "./components/User"
import Error404 from "./components/error"

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><NavLink  style={({ isActive }) => {
              return {
                padding: "3px",
                borderRadius: "3px",
                backgroundColor: isActive ? "gray" : "",
                textDecoration: "none",
                margin: "1rem",
                color: isActive ? "white" : "black"
              };
            }} exact to="/">Home</NavLink></li>
          <li><NavLink style={({ isActive }) => {
              return {
                padding: "3px",
                borderRadius: "3px",
                backgroundColor: isActive ? "gray" : "",
                textDecoration: "none",
                margin: "1rem",
                color: isActive ? "white" : "black"
              };
            }} to="/about">About</NavLink></li>
          <li><NavLink style={({ isActive }) => {
              return {
                padding: "3px",
                borderRadius: "3px",
                backgroundColor: isActive ? "gray" : "",
                textDecoration: "none",
                margin: "1rem",
                color: isActive ? "white" : "black"
              };
            }} to="/users">Users</NavLink></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/users" element={<Users/>} />
        <Route path="/user/:id" element={<User/>} />
        <Route path="*" element={<Error404/>}/>
      </Routes>
      
    </div>
  );
}


export default App;

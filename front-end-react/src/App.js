import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
// Components
import Home from "./components/Home";
import MyList from "./components/MyList";
import NewMovie from "./components/NewMovie";
import EditMovie from "./components/EditMovie";

// CSS
import "./App.css";

function App() {
 
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<NewMovie />} />
      <Route path="/edit/:id" element={<EditMovie />} />
    </Routes>
  );
}

export default App;

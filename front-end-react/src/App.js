import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
// Components
import Home from "./components/Home";
import MyList from "./components/MyList";
import NewMovie from "./components/NewMovie";
import EditMovie from "./components/EditMovie";
import SearchBar from "./components/SearchBar";
// CSS
import "./App.css";

function App() {
  const handleSearch = (e, term) => {
    e.preventDefault()
    setSearch(term)
}
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<NewMovie />} />
      <Route path="/edit/:id" element={<EditMovie />} />
    </Routes>
  );
}

export default App;

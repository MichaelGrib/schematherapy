import './App.css';
import React from 'react';
import Navigation from './components/Navigation';
import Needs from './components/Needs';
import SchemesList from './components/Schemes';
import {Routes, Route } from "react-router";

function App() {
  return (
    <div className="App">
      <Navigation/>
       <Routes>
          <Route path="/" element={<SchemesList />} />
          <Route path="/needs" element={<Needs />} />
       </Routes>
    </div>
  );
}

export default App;

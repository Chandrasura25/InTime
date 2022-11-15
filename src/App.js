import React from 'react';
import {Routes,Route} from 'react-router-dom'
import './App.css';
import Login from './component/Login';
import Dashboard from './component/Dashboard';
function App() {
  
  return (
    <>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
    </>
  );
}
export default App;

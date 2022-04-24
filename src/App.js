import './App.css'
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Pages/Home'
import ListCar from './components/Pages/ListCar'
import DetailCar from './components/Pages/DetailCar'
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/ListCar" element={<ListCar />} />
        <Route path="/DetailCar/:id" element={<DetailCar />} />
        <Route path="*" element={<div>Error: Halaman Tidak Ada</div>} />
      </Routes>
    </BrowserRouter>
    </>   
  );
}

export default App;


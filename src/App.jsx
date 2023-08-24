import React from "react";
import { BrowserRouter, Routes ,Route } from "react-router-dom";


import Home from "./pages/Home.jsx";
import Add from "./pages/Add.jsx";
import Join from "./pages/Join.jsx";
import More from "./pages/More.jsx";
import Places from "./pages/Places.jsx"


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <div className="pages">
        <Routes>
        
        <Route path="/Home" element={<Home />} />
        <Route path="/Add" element={<Add />} />
        <Route path="/Join" element={<Join />} />
        <Route path="/More" element={<More />} />
        <Route path="/Places" element={<Places />} />
        
        </Routes>
        </div>
        </BrowserRouter>
        </div>
  
  )
}

export default App

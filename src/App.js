// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import NotFound from './components/pages/NotFound/NotFound';

const App = () => {
  return (   
    <BrowserRouter>
        <Routes>        
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} /> 
            <Route path="*" element={<NotFound />} />               
        </Routes>    
    </BrowserRouter>         
  );
};

export default App;
